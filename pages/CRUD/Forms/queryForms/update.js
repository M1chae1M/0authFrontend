import {Component} from "react";
import {Form} from "react-bootstrap";
import {CRUDPageContext} from "@/pages";
// import {fields} from "@/pages/_app";
import fields from '@/config/fields.json'
import Check from "../../../components/check";
import Where_list_element from "../columns/where_list_element";
import {LeftColumn, RightColumn} from "../columns/columns";
import WHERE from "../where";

const {Label}=Form

export default class UpdateForm extends Component{
    render(){
        return(
            <CRUDPageContext.Consumer>
            {value=>{
                const {changeValues,data,onChangeDataBox}=value??{}
                const onChange=(e)=>onChangeDataBox(e,'data')
                const DataFields=fields?.map(x=><Check key={x} value={x} onChange={onChange}/>)
                const DataInputs=Object.keys(data??{})?.map(x=><Where_list_element key={x} name={x} onChange={(e)=>{changeValues(e,'data',x)}}/>)
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
            }}
            </CRUDPageContext.Consumer>
        )
    }
}