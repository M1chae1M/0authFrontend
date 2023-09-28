import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import AuthHOC from "@/pages/login/AuthHoc";
import LoginLogos from "../login/login_logos";

const {Label, Control}=Form

class Signin extends Component{
    render(){
        const {signinWithLogin,changeV,changeAuthHOC,url,formData}=this.props
        const {login,password,email,age}=formData
        return(
            <>
                Signin with:
                <Form onSubmit={signinWithLogin}>
                    <Label>Login: </Label>
                    <Control type="text" placeholder="Enter your login" name='login' value={login} onChange={changeV}/>
                    <Label>Password: </Label>
                    <Control type="password" placeholder="Enter your password" name='password' value={password} onChange={changeV}/>
                    <Label>Email: </Label>
                    <Control type="text" placeholder="Enter your email" name='email' value={email} onChange={changeV}/>
                    <Label>Age: </Label>
                    <Control type="number" placeholder="Enter your age" name='age' value={age} onChange={changeV}/>
                    <LoginLogos changeAuthHOC={changeAuthHOC} url={url}/>
                </Form>
            </>
        )
    }
}

export default AuthHOC(Signin)