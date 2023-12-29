import React from "react";
import SelectForm from "./queryForms/select";
import InsertForm from "./queryForms/insert";
import UpdateForm from "./queryForms/update";
import DeleteForm from "./queryForms/delete";
import {Form} from "react-bootstrap";
import {CRUDPageContext} from "@/pages";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {connect} from "react-redux";
import SubmitButton from "./SubmitButton";

const FormHOC=({formState})=>(
    <CRUDPageContext.Consumer>
    {value=>{
        const {submit}=value??{}
        const allForms={
            select:SelectForm,
            insert:InsertForm,
            update:UpdateForm,
            delete:DeleteForm,
        }
        const Query=allForms?.[formState]
        const QueryForm=Query && <Query/>
        const style={
            position:'sticky',
            bottom:'0'
        }
        return(
            <Form onSubmit={submit}>
                <Container>
                    <Row>
                        {QueryForm}
                        <SubmitButton variant="primary" type="submit" style={style}>submit</SubmitButton>
                    </Row>
                </Container>
            </Form>
        )
    }}
    </CRUDPageContext.Consumer>
)

const mapStateToProps=({crud:{formState}})=>({
    formState,
})
const mapDispatchToProps=(dispatch)=>({
})
  
export default connect(mapStateToProps,mapDispatchToProps)(FormHOC)