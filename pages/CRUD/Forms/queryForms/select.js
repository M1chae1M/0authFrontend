import {Form} from "react-bootstrap";
import fields from '@/config/fields.json'
import Check from "../../../components/check";
import {LeftColumn, RightColumn} from "../columns/columns";
import WHERE from "../where";
import {connect} from "react-redux";
import action from "@/STORE/action";

const {Label}=Form

const SelectForm=({change_data_checkboxes})=>{
    const onChange=({target})=>change_data_checkboxes({value:target.value, checked:target.checked})
    const DataFields=fields?.map(x=><Check key={x} value={x} onChange={onChange}/>)
    return(
        <>
            <LeftColumn>
                <div><Label>Data: </Label></div>
                {DataFields}
            </LeftColumn>
            <RightColumn>
                <WHERE/>
            </RightColumn>
        </>
    )
}

const mapStateToProps=({})=>({})
const mapDispatchToProps=(dispatch)=>({
  change_data_checkboxes:(value)=>dispatch(action.change_data_checkboxes(value)),
})

export default connect(mapStateToProps,mapDispatchToProps)(SelectForm)