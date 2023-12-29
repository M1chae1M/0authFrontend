import {Form} from "react-bootstrap";
import fields from '@/config/fields.json'
import Check from "../../../components/check";
import Where_list_element from "../columns/where_list_element";
import {LeftColumn, RightColumn} from "../columns/columns";
import WHERE from "../where";
import {connect} from "react-redux";
import action from "@/STORE/action";

const {Label}=Form

const UpdateForm=({data,change_data_checkboxes,change_data})=>{
        const onChange=({target})=>change_data_checkboxes({value:target.value, checked:target.checked})
        const DataFields=fields?.map(x=><Check key={x} value={x} onChange={onChange}/>)
        const DataInputs=Object.keys(data??{})?.map(x=><Where_list_element key={x} name={x} onChange={({target})=>change_data({[x]:target.value})}/>)
        return(
            <>
                <LeftColumn>
                    <div><Label>Data: </Label></div>
                    {DataFields}
                    {DataInputs}
                </LeftColumn>
                <RightColumn>
                    <WHERE/>
                </RightColumn>
            </>
        )
}

const mapStateToProps=({data})=>({data})
const mapDispatchToProps=(dispatch)=>({
    change_data:(value)=>dispatch(action.change_data(value)),
    change_data_checkboxes:(value)=>dispatch(action.change_data_checkboxes(value)),
})

export default connect(mapStateToProps,mapDispatchToProps)(UpdateForm)