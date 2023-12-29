import Check from "@/pages/components/check"
import fields from '@/config/fields.json'
import {connect} from "react-redux"
import action from "@/STORE/CRUD/action"

const WhereListFields=({change_where_list})=>(
    fields?.map(x=>(
        <Check key={x} value={x} onChange={(e)=>{
            const {value, checked}=e.target
            change_where_list({value, checked});
        }}/>
    ))
)

const mapStateToProps=({})=>({})
const mapDispatchToProps=(dispatch)=>({
    change_where_list:(payload)=>dispatch(action.change_where_list(payload))
})
  
export default connect(mapStateToProps,mapDispatchToProps)(WhereListFields)