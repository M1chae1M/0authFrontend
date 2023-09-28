import React,{Component} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormHOC from './CRUD/Forms/FormHOC';
import FormSwitches from './CRUD/Forms/FormSwitch/FormSwitches';
import {fields,selectAll} from './_app';
import Check from './CRUD/check';
import Where_list_element from './CRUD/Forms/columns/where_list_element';
import {createFetch} from './_app';
import TableContainer from './CRUD/table/TableContainer';
import SelectedData from './CRUD/SelectedData';
import AuthHOC from './login/AuthHoc';
import NeedToLoginModal from './CRUD/NeedToLoginModal';
import MessageNoDB from './CRUD/MessageNoDB';
import MainTable from './CRUD/MainTable';

export const testPageContext=React.createContext()

class App extends Component{
  state={
    data:{},
    where:{},
    db:[],
    formState:'select',
    db_loading:true,
    reqData:[],
    selectLoading:false,
    showModal:false,
  }
  componentDidMount(){
    selectAll(this)
  }
  render(){
    const {db, formState, data, where, db_loading,reqData, selectLoading,showModal}=this.state
    const {logged,isLoggedFunction}=this.props
    const all=()=>selectAll(this)
    const changeState=(newState)=>this.setState(newState)
    const closeModal=()=>changeState({showModal:false})
    const submit=async(e)=>{
      e.preventDefault()
      await isLoggedFunction()
      changeState({selectLoading:true, showModal:formState==='select'||!logged?true:false})
      createFetch(formState,{data, where},(data)=>changeState({reqData:data, selectLoading:false},all))
    }
    const onChangeDataBox=(e, state)=>{
      const {value, checked}=e.target
      const _copy=this.state?.[state];
      !checked && delete _copy?.[value];
      changeState({ [state]:checked?{..._copy, [value]:null}:_copy });
    }
    const changeValues=(e, state, field)=>{
      const {value}=e.target
      changeState({ [state]:{...this.state?.[state], [field]:value===''?null:value} })
    }
    const WhereListFields=fields?.map(x=><Check key={x} value={x} onChange={(e)=>onChangeDataBox(e,'where')}/>)
    const WhereListInputs=Object.keys(where)?.map(x=><Where_list_element key={x} name={x} onChange={(e)=>changeValues(e,'where',x)}/>)
    return(
      <testPageContext.Provider value={{submit,changeValues,onChangeDataBox,changeState,data,WhereListFields,WhereListInputs,formState,db_loading,db,selectLoading,reqData,logged,showModal,closeModal,fields}}>       
        <div className="container mt-5">
          <TableContainer>
            <MainTable/>
            <MessageNoDB/>
          </TableContainer>
          <ButtonGroup>
            <FormSwitches/>
          </ButtonGroup>
          <FormHOC/>
        </div>
        <SelectedData/>
        <NeedToLoginModal/>
      </testPageContext.Provider>
    )
  }
}

export default AuthHOC(App)