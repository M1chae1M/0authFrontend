import React,{Component} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormHOC from './CRUD/Forms/FormHOC';
import FormSwitches from './CRUD/Forms/FormSwitch/FormSwitches';
import {fields,selectAll} from './_app';
import Check from './components/check';
import Where_list_element from './CRUD/Forms/columns/where_list_element';
import {createFetch} from './_app';
import TableContainer from './CRUD/table';
import SelectedData from './CRUD/SelectedData';
import AuthHOC from './login/AuthHoc';
import NeedToLoginModal from './CRUD/NeedToLoginModal';
import MessageNoDB from './CRUD/table/MessageNoDB';
import MainTable from './CRUD/table/MainTable';
import _ from 'lodash';
import TablePagination from './CRUD/pagination';

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
    page:0,
    limit:6,
  }
  componentDidMount(){
    const {page,limit}=this.state;
    selectAll(this,page,limit)
  }
  shouldComponentUpdate(nextProps, nextState){
    const {data,where,db,formState,db_loading,reqData,selectLoading,showModal,page,limit}=this.state

    const cond1=nextState.data !== data || nextState.where !== where || nextState.db !== db || nextState.formState !== formState
    const cond2=nextState.db_loading !== db_loading || nextState.reqData !== reqData || nextState.selectLoading !== selectLoading
    const cond3=nextState.showModal !== showModal || nextState.page !== page || nextState.limit !== limit

    if(cond1 || cond2 || cond3) return true
    return false
  }
  componentDidUpdate(){
    const {page,limit}=this.state
    selectAll(this,page,limit)
  }
  // componentDidCatch(error, errorInfo) {
  //   // this.setState({ hasError: true });
  //   alert('teraz jest error')
  //   // Tutaj możesz zalogować błąd do serwisu monitorowania błędów
  // }
  render(){
    const {db,formState,data,where,db_loading,reqData,selectLoading,showModal,page,limit}=this.state
    const {logged,isLoggedFunction}=this.props
    const changeState=(newState)=>this.setState(newState)
    const closeModal=()=>changeState({showModal:false})
    const imitacion={
      insert:()=>{
        const db_copy=[...db];
        const newRecord=Object.fromEntries(Object.keys(db?.[0] ?? {}).map(x=>[x, '']));
        db_copy.push({ ...newRecord, ...data, id:null });
        return db_copy
      },
      update:()=>{
        const db_copy=_.map([...db], item=>{
          if(_.isMatch(item, where)){
            return { ...item, ...data };
          }
          return item;
        });
        return db_copy
      },
      delete:()=>{
        return _.filter([...db], item=>!_.isMatch(item, where));
      },
    }
    const submit=async(e)=>{
      e.preventDefault()
      await isLoggedFunction()
      changeState({selectLoading:true, showModal:formState==='select'||!logged?true:false})
      await createFetch(formState,{data, where},(data)=>{
        const newReqData=imitacion?.[formState]?.() || data
        const newDB=imitacion?.[formState]?.() || db
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
    const WhereListFields=fields?.map(x=><Check key={x} value={x} onChange={(e)=>onChangeDataBox(e,'where')}/>)
    const WhereListInputs=Object.keys(where)?.map(x=><Where_list_element key={x} name={x} onChange={(e)=>changeValues(e,'where',x)}/>);
    return(
      <testPageContext.Provider value={{submit,changeValues,onChangeDataBox,changeState,data,WhereListFields,WhereListInputs,formState,db_loading,db,selectLoading,reqData,logged,showModal,closeModal,fields,page}}>
        <div className="container mt-5">
          <TableContainer>
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
      </testPageContext.Provider>
    )
  }
}

export default AuthHOC(App)