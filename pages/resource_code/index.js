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
        const styles={

        }
        const {url}=this.props
        return(
            <div>
                <div>
                    <div style={{color:'#0d6efd',fontSize:'40px',fontWeight:'bold'}}>Readme:</div>
                    <Readme/>
                </div>
                <div>
                    <div style={{color:'#0d6efd',fontSize:'40px',fontWeight:'bold'}}>Frontend:</div>
                    <Frontend/>
                </div>
                <div>
                    <div style={{color:'#0d6efd',fontSize:'40px',fontWeight:'bold'}}>Backend:</div>
                    <Backend url={url}/>
                </div>
            </div>
        )
    }
}

export default AuthHOC(ResourceCode)