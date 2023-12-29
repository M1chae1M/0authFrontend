import {Component} from "react";
import {Form} from "react-bootstrap";
import {CRUDPageContext} from "@/pages";
import fields from '@/config/fields.json'
import Where_list_element from "../columns/where_list_element";
import OneColumn from "../columns/columns";
import {connect} from "react-redux";
import action from "@/STORE/action";
const {Label}=Form

class InsertForm extends Component{
    render(){
        const {change_data}=this.props
        const changeValues=({target}, field)=>change_data({[field]:target.value})
        const DataInputs=fields?.map(x=><Where_list_element key={x} name={x} onChange={(e)=>changeValues(e,x)}/>)
        return(
            <OneColumn>
                <div><Label>Data: </Label></div>
                {DataInputs}
            </OneColumn>
        )
    }
}

const mapStateToProps=({})=>({})
const mapDispatchToProps=(dispatch)=>({
    change_data:(value)=>dispatch(action.change_data(value)),
})

export default connect(mapStateToProps,mapDispatchToProps)(InsertForm)