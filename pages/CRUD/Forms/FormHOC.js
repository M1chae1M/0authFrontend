import React from "react";
import SelectForm from "./queryForms/select";
import InsertForm from "./queryForms/insert";
import UpdateForm from "./queryForms/update";
import DeleteForm from "./queryForms/delete";
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import {CRUDPageContext} from "@/pages";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from "styled-components";

const SubmitButton=styled(Button)`
transition:all 0.2s ease-in-out;
&:hover{
    transform:scale(1.01);
}`

const FormHOC=()=>(
    <CRUDPageContext.Consumer>
    {value=>{
        const {submit,formState}=value??{}
        const allForms={
            select:SelectForm,
            insert:InsertForm,
            update:UpdateForm,
            delete:DeleteForm,
        }
        const Query=allForms?.[formState]
        const QueryForm=Query && <Query/>
        const button={
            position:'sticky',
            bottom:'0'
        }
        return(
            <Form onSubmit={submit}>
                <Container>
                    <Row>
                        {QueryForm}
                        <SubmitButton variant="primary" type="submit" style={button}>submit</SubmitButton>
                    </Row>
                </Container>
            </Form>
        )
    }}
    </CRUDPageContext.Consumer>
)

export default FormHOC