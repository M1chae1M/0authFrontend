import {Component} from "react";
import Background from "./Background";

export default class Modal extends Component{
    render(){
        const {show,children,onClick}=this.props
        // const closeModal=(e)=>console.log(e.target.getAttribute('name')==='background')
        return(
            show && 
            <Background
                // onClick={closeModal}
                // onClick={onClick}
            >
                {children}
            </Background>
        )
    }
}