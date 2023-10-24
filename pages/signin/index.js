import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import AuthHOC, {ContextOfAuthHOC} from "@/pages/login/AuthHoc";
import LoginLogos from "../login/login_logos";

const {Label, Control}=Form

class Signin extends Component{
    render(){
        const {signinWithLogin,changeAuthHOC,url}=this.props
        return(
            <ContextOfAuthHOC.Consumer>
            {value=>{
                const {changeV,formData}=value??{}
                const {login,password,email,age}=formData
                return(
                    <Form onSubmit={signinWithLogin}>
                        <div>Signin with:</div>
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
                )
            }}
            </ContextOfAuthHOC.Consumer>
        )
    }
}

export default AuthHOC(Signin)