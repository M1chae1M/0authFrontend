import {Form} from "react-bootstrap";
import fields from '@/config/fields.json'
import Where_list_element from "../columns/where_list_element";
import OneColumn from "../columns/columns";
import {connect} from "react-redux";
import action from "@/STORE/CRUD/action";
const {Label}=Form

const InsertForm=({change_data})=>{
    const DataInputs=fields?.map(x=><Where_list_element key={x} name={x} onChange={({target})=>change_data({[x]:target.value})}/>)
    return(
        <OneColumn>
            <div><Label>Data: </Label></div>
            {DataInputs}
        </OneColumn>
    ) 
}

const mapStateToProps=({})=>({})
const mapDispatchToProps=(dispatch)=>({
    change_data:(value)=>dispatch(action.change_data(value)),
})

export default connect(mapStateToProps,mapDispatchToProps)(InsertForm)