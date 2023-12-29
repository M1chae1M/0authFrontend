import {Component} from "react";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import {connect}from "react-redux";
import action from "@/STORE/CRUD/action";

const Button_hover=styled(Button)`
&:hover{
    opacity:0.7 !important;
    transform:scale(1.05) !important;
}`

class SwitchButton extends Component{
    render(){
        const {type,formState,change_state}=this.props
        const variant=type===formState?"primary":'secondary'
        const onClick=()=>change_state({formState:type,where:{},
            data:{}
        })
        
        return(
            <Button_hover variant={variant} onClick={onClick}>{type}</Button_hover>
        )
    }
}

const mapStateToProps=({crud:{formState}})=>({formState})
const mapDispatchToProps=(dispatch)=>({
    change_state:(newValue)=>dispatch(action.change_state(newValue)),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(SwitchButton)