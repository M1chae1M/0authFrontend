import AuthHOC from "../login/AuthHoc";
import Readme from "./readme";
import Frontend from "./frontend";
import Backend from "./backend";
import {Container} from 'react-bootstrap';
import { connect } from "react-redux";
import action from "@/STORE/auth/action";

const ResourceCode=()=>(
    <Container>
        <Readme/>
        <Frontend/>
        <Backend/>
    </Container>
)

// export default AuthHOC(ResourceCode)
const mapStateToProps=({})=>({})
const mapDispatchToProps=(dispatch)=>({})

export default connect(mapStateToProps,mapDispatchToProps)(AuthHOC(ResourceCode))