import {connect} from "react-redux"
import Where_list_element from "../columns/where_list_element"
import action from "@/STORE/action"

const WhereListInputs=({where,change_state})=>(
    Object.keys(where??{})?.map(x=>(
        <Where_list_element key={x} name={x} onChange={(e)=>{
            const {value}=e.target??{}
            change_state({
                where:{...where, [x]:value===''?'':value}
            })
        }}/>)
    )
)

const mapStateToProps=(state)=>({
    where:state.where,
})
const mapDispatchToProps=(dispatch)=>({
    change_state:(newState)=>dispatch(action.change_state(newState)),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(WhereListInputs)