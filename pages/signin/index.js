import Form from 'react-bootstrap/Form';
import AuthHOC from "@/pages/login/AuthHoc";
import LoginLogos from "../login/login_logos";
import FormElement from '../components/FormElementBuilder';

const Signin=({signinWithLogin,changeAuthHOC})=>(
    <Form onSubmit={signinWithLogin}>
        <div>Signin with:</div>
        <FormElement name="login" type="text"/>
        <FormElement name="password" type="password"/>
        <FormElement name="email" type="text"/>
        <FormElement name="age" type="number"/>
        <LoginLogos changeAuthHOC={changeAuthHOC}/>
    </Form>
)

export default AuthHOC(Signin)