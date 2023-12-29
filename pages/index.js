import React,{PureComponent} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormHOC from './CRUD/Forms/FormHOC';
import FormSwitches from './CRUD/Forms/FormSwitch/FormSwitches';
import select from '@/functions/selectAll';
import {createFetch} from '@/functions/createFetch';
import TableContainer from './CRUD/table';
import SelectedData from './CRUD/SelectedData';
import AuthHOC from './login/AuthHoc';
import NeedToLoginModal from './CRUD/NeedToLoginModal';
import MessageNoDB from './CRUD/table/MessageNoDB';
import MainTable from './CRUD/table/MainTable';
import _ from 'lodash';
import TablePagination from './CRUD/pagination';
import {connect} from 'react-redux';
import action from '../STORE/CRUD/action';

export const CRUDPageContext=React.createContext()

class App extends PureComponent{
  state={
    db:[],
    db_loading:true,
  }
  componentDidMount=select.bind(this)
  render(){
    const {db,db_loading}=this.state
    const {logged,isLoggedFunction,formState,change_state,where,limit,page,data}=this.props
    const submit=async(e)=>{
      e.preventDefault()
      await isLoggedFunction()
      change_state({showModal:formState==='select'||!logged?true:false, selectLoading:true})
      await createFetch(formState,{data, where,offset_data:{limit,page}},async({query_req, db_query_imitation})=>{
        const reqData=db_query_imitation || query_req

        if(reqData?.length===0){
          await change_state({selectLoading:false})
          select.bind(this)();
          change_state({page:0})
        }else{
          formState!=='select' && this.setState({db:reqData});
          change_state({selectLoading:false,reqData})
        }
      })
    }
    return(
      <CRUDPageContext.Provider value={{submit,db_loading,db,logged,
        selectAll:select.bind(this)
      }}>
        <div className='container mt-5'>
          <TableContainer height='250px'>
            <MainTable/>
            <MessageNoDB/>
          </TableContainer>
          <TablePagination/>
          <ButtonGroup style={{marginBottom:'15px'}}>
            <FormSwitches/>
          </ButtonGroup>
          <FormHOC/>
        </div>
        <SelectedData/>
        <NeedToLoginModal/>
      </CRUDPageContext.Provider>
    )
  }
}

const mapStateToProps=({crud:{selectLoading,formState,showModal,limit,page,reqData,where,data}})=>({selectLoading,formState,showModal,limit,page,reqData,where,data})
const mapDispatchToProps=(dispatch)=>({
  change_state:(newState)=>dispatch(action.change_state(newState)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AuthHOC(App))