import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import AuthHOC from "@/pages/login/AuthHoc";
import LoginLogos from "./login_logos";

const {Label, Control}=Form

class Login extends Component{
    render(){
        const {loginFunction,changeV,changeAuthHOC,url,formData}=this.props
        const {login, password}=formData
        return(
            <>
                Login with:
                <Form onSubmit={loginFunction}>
                    <Label>Login: </Label>
                    <Control type="text" placeholder="Enter your login" name='login' value={login} onChange={changeV}/>
                    <Label>Password: </Label>
                    <Control type="password" placeholder="Enter your password" name='password' value={password} onChange={changeV}/>
                    <LoginLogos changeAuthHOC={changeAuthHOC} url={url}/>
                </Form>
            </>
        )
    }
}

export default AuthHOC(Login)