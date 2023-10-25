import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import AuthHOC from "@/pages/login/AuthHoc";
import LoginLogos from "./login_logos";
import {ContextOfAuthHOC} from "@/pages/login/AuthHoc";
import Element from "../CRUD/Forms/columns/Element";

const {Label, Control}=Form

class Login extends Component{
    render(){
        const {changeAuthHOC,url}=this.props
        return(
            <ContextOfAuthHOC.Consumer>
            {value=>{
                const {changeV,formData,loginFunction}=value??{}
                const {login, password}=formData
                return(
                    <Form onSubmit={loginFunction}>
                        <div>Login with:</div>
                        <Element>
                            <Label>Login: </Label>
                            <Control type="text" placeholder="Enter your login" name='login' value={login} onChange={changeV}/>
                        </Element>
                        <Element>
                            <Label>Password: </Label>
                            <Control type="password" placeholder="Enter your password" name='password' value={password} onChange={changeV}/>
                        </Element>
                        <LoginLogos changeAuthHOC={changeAuthHOC} url={url}/>
                    </Form>
                )
            }}
            </ContextOfAuthHOC.Consumer>
        )
    }
}

export default AuthHOC(Login)

