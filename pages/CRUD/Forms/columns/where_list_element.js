import React from "react";
import Form from 'react-bootstrap/Form';
import Element from "./Element";

const {Label, Control}=Form

const Where_list_element=({name, onChange})=>(
    <Element>
        <Label>{name}:</Label>
        <Control type="text" placeholder={`Enter your ${name}`} name={name} onChange={onChange}/>
    </Element>
)

export default Where_list_element