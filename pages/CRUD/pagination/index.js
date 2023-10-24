import {createFetch} from '../../_app'
import {testPageContext} from '../..'
import React,{Component} from 'react'
import ReactPaginate from "react-paginate";

export default class TablePages extends Component{
    state={
        count:1,
    }
    componentDidMount(){
        createFetch(`count`,{},({count})=>{
            this.setState({count:Math.ceil(count/this.props.limit)})
        })
    }
    render(){
        const {count}=this.state
        const styles={
            display:'grid',
            position:'sticky',
            top:'0%',
            right:'0%',
            justifyContent:'end',
            gridAutoFlow:'column',
        }
        return(
            <testPageContext.Consumer>
            {value=>{
                const {changeState,db}=value??{}
                const handlePageClick=({selected})=>changeState({page:selected})
                return(
                    db?.length &&
                    <div style={styles}>
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            pageCount={count}
                            onPageChange={handlePageClick}
                            containerClassName={"allCards"}
                            activeClassName={"actualCard"}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                        />
                    </div>
                )
            }}
            </testPageContext.Consumer>
        )
    }
}