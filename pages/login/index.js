import Form from 'react-bootstrap/Form';
import AuthHOC from "@/pages/login/AuthHoc";
import LoginLogos from "./login_logos";
import {ContextOfAuthHOC} from "@/pages/login/AuthHoc";

const Login=({changeAuthHOC,url})=>(
    <ContextOfAuthHOC.Consumer>
    {value=>{
        const {loginFunction,FormElement}=value??{}
        return(
            <Form onSubmit={loginFunction}>
                <div>Login with:</div>
                <FormElement name="login" type="text"/>
                <FormElement name="password" type="password"/>
                <LoginLogos changeAuthHOC={changeAuthHOC} url={url}/>
            </Form>
        )
    }}
    </ContextOfAuthHOC.Consumer>
)

export default AuthHOC(Login)