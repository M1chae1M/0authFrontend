import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import AuthHOC from "@/pages/login/AuthHoc";
import LoginLogos from "./login_logos";
import {ContextOfAuthHOC} from "@/pages/login/AuthHoc";

class Login extends Component{
    render(){
        const {changeAuthHOC,url}=this.props
        return(
            <ContextOfAuthHOC.Consumer>
            {value=>{
                const {formData,loginFunction,FormElement}=value??{}
                const {login, password}=formData
                return(
                    <Form onSubmit={loginFunction}>
                        <div>Login with:</div>
                        <FormElement name="login" type="text" value={login}/>
                        <FormElement name="password" type="password" value={password}/>
                        <LoginLogos changeAuthHOC={changeAuthHOC} url={url}/>
                    </Form>
                )
            }}
            </ContextOfAuthHOC.Consumer>
        )
    }
}

export default AuthHOC(Login)

