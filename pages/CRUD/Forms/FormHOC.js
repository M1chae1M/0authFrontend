import React from "react";
import SelectForm from "./queryForms/select";
import InsertForm from "./queryForms/insert";
import UpdateForm from "./queryForms/update";
import DeleteForm from "./queryForms/delete";
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import {testPageContext} from "@/pages";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const {Label}=Form

const FormHOC=()=>(
    <testPageContext.Consumer>
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
                        <Button variant="primary" type="submit" style={button}>submit</Button>
                    </Row>
                </Container>
            </Form>
        )
    }}
    </testPageContext.Consumer>
)

export default FormHOC