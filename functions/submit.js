import {createFetch} from '@/functions/createFetch';
import select from '@/functions/selectAll';

async function submit(e){
    e.preventDefault()
    const {logged,isLoggedFunction,formState,change_state,where,limit,page,data}=this.props
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

export default submit