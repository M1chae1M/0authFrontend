import Form from 'react-bootstrap/Form';
import AuthHOC from "@/pages/login/AuthHoc";
import LoginLogos from "./Logos/login_logos";
import FormElement from '../components/FormElementBuilder';
import {connect} from 'react-redux';
import action from '@/STORE/auth/action';

const Login=({loginFunction})=>(
    <Form onSubmit={loginFunction}>
        <div>Login with:</div>
        <FormElement name="email" type="text"/>
        <FormElement name="password" type="password"/>
        <LoginLogos/>
    </Form>
)

// export default AuthHOC(Login)
const mapStateToProps=({})=>({})
const mapDispatchToProps=(dispatch)=>({})

export default connect(mapStateToProps,mapDispatchToProps)(AuthHOC(Login))