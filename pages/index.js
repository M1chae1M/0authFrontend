import React,{PureComponent} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormHOC from './CRUD/Forms/FormHOC';
import FormSwitches from './CRUD/Forms/FormSwitch/FormSwitches';
import select from '@/functions/selectAll';
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
import submitForm from '../functions/submit';

export const CRUDPageContext=React.createContext()

class App extends PureComponent{
  state={
    db:[],
    db_loading:true,
  }
  componentDidMount=select.bind(this)
  render(){
    const {db,db_loading}=this.state
    const {logged}=this.props
    const submit=submitForm.bind(this)
    const selectAll=select.bind(this)
    return(
      <CRUDPageContext.Provider value={{db_loading,db,logged,submit,selectAll}}>
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

const mapStateToProps=({crud:{selectLoading,formState,showModal,limit,page,reqData,where,data},auth:{login_loading_state}})=>({selectLoading,formState,showModal,limit,page,reqData,where,data,login_loading_state})
const mapDispatchToProps=(dispatch)=>({
  change_state:(newState)=>dispatch(action.change_state(newState)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AuthHOC(App))