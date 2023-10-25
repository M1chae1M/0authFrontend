import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import AuthHOC, {ContextOfAuthHOC} from "@/pages/login/AuthHoc";
import LoginLogos from "../login/login_logos";

class Signin extends Component{
    render(){
        const {signinWithLogin,changeAuthHOC,url}=this.props
        return(
            <ContextOfAuthHOC.Consumer>
            {value=>{
                const {formData,FormElement}=value??{}
                const {login,password,email,age}=formData
                return(
                    <Form onSubmit={signinWithLogin}>
                        <div>Signin with:</div>
                        <FormElement name="login" type="text" value={login}/>
                        <FormElement name="password" type="password" value={password}/>
                        <FormElement name="email" type="text" value={email}/>
                        <FormElement name="age" type="number" value={age}/>
                        <LoginLogos changeAuthHOC={changeAuthHOC} url={url}/>
                    </Form>
                )
            }}
            </ContextOfAuthHOC.Consumer>
        )
    }
}

export default AuthHOC(Signin)