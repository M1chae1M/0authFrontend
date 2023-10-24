import AuthHOC from "../login/AuthHoc";
import {Component} from "react";
import Readme from "./readme";
import Frontend from "./frontend";
import Backend from "./backend";

const fronteund_url=''
const backend=''

// `https://github.com/M1chae1M/${fronteund_url}`
// `https://github.com/M1chae1M/${backend}`

class ResourceCode extends Component{
    render(){
        const {url}=this.props
        return(
            <div>
                <Readme/>
                <Frontend/>
                <Backend url={url}/>
            </div>
        )
    }
}

export default AuthHOC(ResourceCode)