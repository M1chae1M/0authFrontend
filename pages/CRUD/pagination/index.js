import {createFetch} from '@/functions/createFetch';
import {CRUDPageContext} from '../..'
import React,{Component} from 'react'
import ReactPaginate from "react-paginate";
import {connect} from 'react-redux';
import action from '@/STORE/CRUD/action';

class TablePagination extends Component{
    state={
        count:1,
    }
    componentDidMount=()=>createFetch(`count`,{},({count})=>this.setState({count:Math.ceil(count/this.props.limit)}))
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
                const {db,selectAll,logged}=value??{}
                const {change_state}=this.props
                const handlePageClick=async({selected})=>{
                    await change_state({page:selected});
                    selectAll?.();
                }
                return(
                    db?.length>0 && logged &&
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

const mapStateToProps=({crud:{limit}})=>({
    limit,
})
const mapDispatchToProps=(dispatch)=>({
    change_state:(newState)=>dispatch(action.change_state(newState)),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(TablePagination)