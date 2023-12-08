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
import {connect} from 'react-redux';
import action from './STORE/action';

export const CRUDPageContext=React.createContext()

class App extends PureComponent{
  state={
    data:{},
    where:{},
    db:[],
    db_loading:true,
    reqData:[],
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
    const {db,data,where,db_loading,reqData,showModal,page,limit}=this.state
    const {logged,isLoggedFunction,formState}=this.props
    const changeState=(newState)=>this.setState(newState)
    const closeModal=()=>changeState({showModal:false})
    const submit=async(e)=>{
      e.preventDefault()
      await isLoggedFunction()
      changeState({showModal:formState==='select'||!logged?true:false});
      this.props.change_selectLoading(true);
      await createFetch(formState,{data, where},(data)=>{
        const newReqData=db_query_imitacion?.[formState]?.(db,data,where) || data
        const newDB=db_query_imitacion?.[formState]?.(db,data,where) || db
        changeState({reqData:newReqData, db:newDB});
        this.props.change_selectLoading(false);
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
      <CRUDPageContext.Provider value={{
        submit,changeValues,onChangeDataBox,
        changeState,data,where,
        db_loading,db,
        reqData,logged,showModal,
        closeModal,fields
        ,page}}>
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

const mapStateToProps=(state)=>({
  selectLoading:state.selectLoading,
  formState:state.formState,
})
const mapDispatchToProps=(dispatch)=>({
  change_selectLoading:(newValue)=>dispatch(action.change_selectLoading(newValue)),
  change_formState:(newValue)=>dispatch(action.change_formState(newValue)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AuthHOC(App))