import {Component} from "react";
import {Form} from "react-bootstrap";
import {testPageContext} from "@/pages";
import {fields} from "@/pages/_app";
import Check from "../../check";
import Where_list_element from "../columns/where_list_element";
import {LeftColumn, RightColumn} from "../columns/columns";
import WHERE from "../WHERE";

const {Label}=Form

export default class UpdateForm extends Component{
    render(){
        return(
            <testPageContext.Consumer>
            {value=>{
                const {changeValues,data,onChangeDataBox}=value??{}
                const onChange=(e)=>onChangeDataBox(e,'data')
                const DataFields=fields?.map(x=><Check key={x} value={x} onChange={onChange}/>)
                const DataInputs=Object.keys(data??{})?.map(x=><Where_list_element key={x} name={x} onChange={(e)=>{changeValues(e,'data',x)}}/>)
                return(
                    <>
                        <LeftColumn>
                            <Label>Data: </Label>
                            {DataFields}
                            {DataInputs}
                        </LeftColumn>
                        <RightColumn>
                            <WHERE/>
                        </RightColumn>
                    </>
                )
            }}
            </testPageContext.Consumer>
        )
    }
}