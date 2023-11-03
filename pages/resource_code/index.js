import AuthHOC from "../login/AuthHoc";
import {Component} from "react";
import Readme from "./readme";
import Frontend from "./frontend";
import Backend from "./backend";

class ResourceCode extends Component{
    render(){
        // const {url}=this.props
        return(
            <div>
                <Readme/>
                <Frontend/>
                <Backend/>
            </div>
        )
    }
}

export default AuthHOC(ResourceCode)