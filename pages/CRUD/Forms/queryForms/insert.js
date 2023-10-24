import {Component} from "react";
import {Form} from "react-bootstrap";
import {testPageContext} from "@/pages";
import {fields} from "@/pages/_app";
import Where_list_element from "../columns/where_list_element";
import OneColumn from "../columns/columns";
const {Label}=Form

export default class InsertForm extends Component{
    render(){
        return(
            <testPageContext.Consumer>
            {value=>{
                const {changeValues}=value??{}
                const DataInputs=fields?.map(x=><Where_list_element key={x} name={x} onChange={(e)=>changeValues(e,'data',x)}/>)
                return(
                    <OneColumn>
                        <Label>Data: </Label>
                        {DataInputs}
                    </OneColumn>
                )
            }}
            </testPageContext.Consumer>
        )
    }
}