import {Component} from "react";
import {Form} from "react-bootstrap";
import {testPageContext} from "@/pages";
import {fields} from "@/pages/_app";
import Check from "../../check";
import {LeftColumn, RightColumn} from "../columns/columns";
import WHERE from "../WHERE";

const {Label}=Form

export default class SelectForm extends Component{
    render(){
        return(
            <testPageContext.Consumer>
            {value=>{
                const {onChangeDataBox}=value??{}
                const DataFields=fields?.map(x=><Check key={x} value={x} onChange={(e)=>{onChangeDataBox(e, 'data')}}/>)
                return(
                    <>
                        <LeftColumn>
                            <Label>Data: </Label>
                            {DataFields}
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