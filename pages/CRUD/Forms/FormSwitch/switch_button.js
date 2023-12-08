import {Component} from "react";
import Button from 'react-bootstrap/Button';
import {CRUDPageContext} from "@/pages";
import styled from "styled-components";
import {connect}from "react-redux";
import action from "@/pages/STORE/action";

const Button_hover=styled(Button)`
&:hover{
    opacity:0.7 !important;
    transform:scale(1.05) !important;
}`

class SwitchButton extends Component{
    render(){
        const {type,formState,change_state}=this.props
        return(
            <CRUDPageContext.Consumer>
            {value=>{
                const {changeState}=value??{}
                const variant=type===formState?"primary":'secondary'
                const onClick=()=>{
                    changeState({
                        data:{},
                        where:{},
                    });
                    change_state({formState:type})
                }
                return <Button_hover variant={variant} onClick={onClick}>{type}</Button_hover>
            }}
            </CRUDPageContext.Consumer>
        )
    }
}

const mapStateToProps=(state)=>({
    formState:state.formState,
})
const mapDispatchToProps=(dispatch)=>({
    change_state:(newValue)=>dispatch(action.change_state(newValue)),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(SwitchButton)