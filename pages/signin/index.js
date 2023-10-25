import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import AuthHOC, {ContextOfAuthHOC} from "@/pages/login/AuthHoc";
import LoginLogos from "../login/login_logos";
import Element from "../CRUD/Forms/columns/Element";

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
                        <Element>
                            <Label>Login: </Label>
                            <Control type="text" placeholder="Enter your login" name='login' value={login} onChange={changeV}/>
                        </Element>
                        <Element>
                            <Label>Password: </Label>
                            <Control type="password" placeholder="Enter your password" name='password' value={password} onChange={changeV}/>
                        </Element>
                        <Element>
                            <Label>Email: </Label>
                            <Control type="text" placeholder="Enter your email" name='email' value={email} onChange={changeV}/>
                        </Element>
                        <Element>
                            <Label>Age: </Label>
                            <Control type="number" placeholder="Enter your age" name='age' value={age} onChange={changeV}/>
                        </Element>
                        <LoginLogos changeAuthHOC={changeAuthHOC} url={url}/>
                    </Form>
                )
            }}
            </ContextOfAuthHOC.Consumer>
        )
    }
}

export default AuthHOC(Signin)