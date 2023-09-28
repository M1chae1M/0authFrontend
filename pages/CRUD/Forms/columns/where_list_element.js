import React from "react";
import Form from 'react-bootstrap/Form';

const {Label, Control}=Form

const Where_list_element=({name, onChange})=>(
    <div>
        <Label>{name}:</Label>
        <Control type="text" placeholder={`Enter your ${name}`} name={name} onChange={onChange}/>
    </div>
)

export default Where_list_element