import {Component} from "react";
import Button from 'react-bootstrap/Button';
import {testPageContext} from "@/pages";
import styled from "styled-components";

const Button_hover=styled(Button)`
&:hover{
    opacity:0.7 !important;
    transform:scale(1.05) !important;
}
`
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
                return <Button_hover variant="primary" onClick={onClick}>{type}</Button_hover>
            }}
            </testPageContext.Consumer>
        )
    }
}