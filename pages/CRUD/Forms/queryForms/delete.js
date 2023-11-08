import {Component} from "react";
import OneColumn from "../columns/columns";
import WHERE from "../where";

export default class DeleteForm extends Component{
    render(){
        return(
            <OneColumn>
                <WHERE/>
            </OneColumn>
        )
    }
}