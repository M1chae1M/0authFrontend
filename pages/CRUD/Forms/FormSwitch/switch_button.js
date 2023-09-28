import {Component} from "react";
import Button from 'react-bootstrap/Button';
import {testPageContext} from "@/pages";

export default class SwitchButton extends Component{
    render(){
        const {type}=this.props
        return(
            <testPageContext.Consumer>
            {value=>{
                const {changeState}=value??{}
                const onClick=()=>changeState({
                    formState:type,
                    data:{},
                    where:{},
                })
                return <Button variant="primary" onClick={onClick}>{type}</Button>
            }}
            </testPageContext.Consumer>
        )
    }
}