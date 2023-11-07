import AuthHOC from "../login/AuthHoc";
import Readme from "./readme";
import Frontend from "./frontend";
import Backend from "./backend";
import {Container} from 'react-bootstrap';

const ResourceCode=()=>(
    <Container>
        <Readme/>
        <Frontend/>
        <Backend/>
    </Container>
)

export default AuthHOC(ResourceCode)