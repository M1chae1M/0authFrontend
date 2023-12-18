import Check from "@/pages/components/check"
import fields from '@/config/fields.json'
import {connect} from "react-redux"
import action from "@/STORE/action"

const WhereListFields=({where,change_state})=>(
    fields?.map(x=>(
        <Check key={x} value={x} onChange={(e)=>{
            const {value, checked}=e.target
            const _copy=where;
            !checked && delete _copy?.[value];

            // console.log('test kliknięcia')

            change_state({ where:checked?{..._copy, [value]:''}:_copy });
        }}/>
    ))
)

const mapStateToProps=(state)=>({
    where:state.where,
})
const mapDispatchToProps=(dispatch)=>({
    change_state:(newState)=>dispatch(action.change_state(newState)),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(WhereListFields)