import React from "react";
import Form from 'react-bootstrap/Form';
import styled from "styled-components";

const {Label, Control}=Form

const Elemnet=styled.div`
transition:0.2s ease-in-out;
&:hover >input::placeholder{
    color:#007bff;
}
&:hover >input{
    scale:1.01;
    opacity:0.7;
    border:solid #007bff 1.5px;
}
&:hover > label{
    color:#007bff;
    font-weight:bold;
}`

const Where_list_element=({name, onChange})=>(
    <Elemnet>
        <Label>{name}:</Label>
        <Control type="text" placeholder={`Enter your ${name}`} name={name} onChange={onChange}/>
    </Elemnet>
)

export default Where_list_element