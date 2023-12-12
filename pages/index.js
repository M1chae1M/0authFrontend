import React,{PureComponent} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormHOC from './CRUD/Forms/FormHOC';
import FormSwitches from './CRUD/Forms/FormSwitch/FormSwitches';
import {selectAll} from './_app';
import {createFetch} from './_app';
import TableContainer from './CRUD/table';
import SelectedData from './CRUD/SelectedData';
import AuthHOC from './login/AuthHoc';
import NeedToLoginModal from './CRUD/NeedToLoginModal';
import MessageNoDB from './CRUD/table/MessageNoDB';
import MainTable from './CRUD/table/MainTable';
import _ from 'lodash';
import TablePagination from './CRUD/pagination';
import {db_query_imitacion} from './_app';
import {connect} from 'react-redux';
import action from '../STORE/action';

export const CRUDPageContext=React.createContext()

class App extends PureComponent{
  state={
    data:{},
    db:[],
    db_loading:true,
  }
  componentDidMount=selectAll.bind(this)
  componentDidUpdate=selectAll.bind(this)
  render(){
    const {db,data,db_loading}=this.state
    const {logged,isLoggedFunction,formState,change_state,where}=this.props
    const changeState=(newState)=>this.setState(newState)
    const closeModal=()=>change_state({showModal:false})
    const submit=async(e)=>{
      e.preventDefault()
      await isLoggedFunction()
      change_state({showModal:formState==='select'||!logged?true:false, selectLoading:true})
      await createFetch(formState,{data, where},(data)=>{
        const reqData=db_query_imitacion?.[formState]?.(db,data,where) || data
        changeState({db:reqData});
        change_state({selectLoading:false,reqData})
      })
    }
    const onChangeDataBox=(e, state)=>{
      const {value, checked}=e.target
      const _copy=this.state?.[state];
      !checked && delete _copy?.[value];
      changeState({ [state]:checked?{..._copy, [value]:''}:_copy });
    }
    const changeValues=(e, state, field)=>{
      const {value}=e.target
      changeState({ [state]:{...this.state?.[state], [field]:value===''?'':value} })
    }
    return(
      <CRUDPageContext.Provider value={{submit,changeValues,onChangeDataBox,changeState,data,db_loading,db,logged,closeModal}}>
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

const mapStateToProps=(state)=>({
  selectLoading:state.selectLoading,
  formState:state.formState,
  showModal:state.showModal,
  limit:state.limit,
  page:state.page,
  reqData:state.reqData,
  where:state.where,
})
const mapDispatchToProps=(dispatch)=>({
  change_state:(newState)=>dispatch(action.change_state(newState)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AuthHOC(App))