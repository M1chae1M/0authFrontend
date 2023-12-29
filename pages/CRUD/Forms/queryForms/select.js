import {Component} from "react";
import {Form} from "react-bootstrap";
import {CRUDPageContext} from "@/pages";
import fields from '@/config/fields.json'
import Check from "../../../components/check";
import {LeftColumn, RightColumn} from "../columns/columns";
import WHERE from "../where";

const {Label}=Form

export default class SelectForm extends Component{
    render(){
        return(
            <CRUDPageContext.Consumer>
            {value=>{
                const {onChangeDataBox}=value??{}
                // const DataFields=fields?.map(x=><Check key={x} value={x} onChange={(e)=>{onChangeDataBox(e, 'data')}}/>)
                const DataFields=fields?.map(x=><Check key={x} value={x} onChange={(e)=>{onChangeDataBox(e)}}/>)
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
            }}
            </CRUDPageContext.Consumer>
        )
    }
}