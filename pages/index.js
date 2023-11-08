import React,{PureComponent} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormHOC from './CRUD/Forms/FormHOC';
import FormSwitches from './CRUD/Forms/FormSwitch/FormSwitches';
import {fields,selectAll} from './_app';
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

export const CRUDPageContext=React.createContext()

class App extends PureComponent{
  state={
    data:{},
    where:{},
    db:[],
    formState:'select',
    db_loading:true,
    reqData:[],
    selectLoading:false,
    showModal:false,
    page:0,
    limit:6,
  }
  componentDidMount(){
    const {page,limit}=this.state;
    selectAll(this,page,limit)
  }
  componentDidUpdate(){
    const {page,limit}=this.state
    selectAll(this,page,limit)
  }
  render(){
    const {db,formState,data,where,db_loading,reqData,selectLoading,showModal,page,limit}=this.state
    const {logged,isLoggedFunction}=this.props
    const changeState=(newState)=>this.setState(newState)
    const closeModal=()=>changeState({showModal:false})
    const submit=async(e)=>{
      e.preventDefault()
      await isLoggedFunction()
      changeState({selectLoading:true, showModal:formState==='select'||!logged?true:false})
      await createFetch(formState,{data, where},(data)=>{
        const newReqData=db_query_imitacion?.[formState]?.(db,data,where) || data
        const newDB=db_query_imitacion?.[formState]?.(db,data,where) || db
        changeState({reqData:newReqData, db:newDB, selectLoading:false})
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
      <CRUDPageContext.Provider value={{submit,changeValues,onChangeDataBox,changeState,data,where,formState,db_loading,db,selectLoading,reqData,logged,showModal,closeModal,fields,page}}>
        <div className='container mt-5'>
          <TableContainer height='250px'>
            <MainTable/>
            <MessageNoDB/>
          </TableContainer>
          <TablePagination limit={limit}/>
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

export default AuthHOC(App)