import {createFetch} from '../../_app'
import {CRUDPageContext} from '../..'
import React,{Component} from 'react'
import ReactPaginate from "react-paginate";
import { connect } from 'react-redux';
import action from '@/STORE/action';

class TablePagination extends Component{
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
            marginTop:'15px',
        }
        return(
            <CRUDPageContext.Consumer>
            {value=>{
                const {changeState,db}=value??{}
                const handlePageClick=({selected})=>changeState({page:selected})
                return(
                    db?.length>0 &&
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
            </CRUDPageContext.Consumer>
        )
    }
}

const mapStateToProps=(state)=>({
    limit:state.limit,
})
const mapDispatchToProps=(dispatch)=>({
    change_state:(newState)=>dispatch(action.change_state(newState)),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(TablePagination)