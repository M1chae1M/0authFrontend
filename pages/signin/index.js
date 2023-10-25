import Form from 'react-bootstrap/Form';
import AuthHOC, {ContextOfAuthHOC} from "@/pages/login/AuthHoc";
import LoginLogos from "../login/login_logos";

const Signin=({signinWithLogin,changeAuthHOC,url})=>(
    <ContextOfAuthHOC.Consumer>
    {value=>{
        const {FormElement}=value??{}
        return(
            <Form onSubmit={signinWithLogin}>
                <div>Signin with:</div>
                <FormElement name="login" type="text"/>
                <FormElement name="password" type="password"/>
                <FormElement name="email" type="text"/>
                <FormElement name="age" type="number"/>
                <LoginLogos changeAuthHOC={changeAuthHOC} url={url}/>
            </Form>
        )
    }}
    </ContextOfAuthHOC.Consumer>
)

export default AuthHOC(Signin)