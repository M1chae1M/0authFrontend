import Form from 'react-bootstrap/Form';
import AuthHOC from "@/pages/login/AuthHoc";
import LoginLogos from "./login_logos";
import FormElement from '../components/FormElementBuilder';

const Login=({loginFunction,changeAuthHOC,url})=>(
    <Form onSubmit={loginFunction}>
        <div>Login with:</div>
        <FormElement name="login" type="text"/>
        <FormElement name="password" type="password"/>
        <LoginLogos changeAuthHOC={changeAuthHOC} url={url}/>
    </Form>
)

export default AuthHOC(Login)