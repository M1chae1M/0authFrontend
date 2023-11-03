import {Component} from "react";
import DisplayAlert from "@/pages/Modal/DisplayAlert";
import BlueBTN_hover from "../components/BlueBTN_hover";
import CONFIG from '../../config/config.json'
const {frontend}=CONFIG

const pageURL=`${frontend}/login`

export default class LoginResult extends Component{
    componentDidMount(){
        const url_params=new URLSearchParams(window.location.search);
        const success=url_params.get("success")??false;
        const token=url_params.get('token')??'';
        window.history.pushState({}, '', window.location.pathname);
        localStorage.setItem('token',token);
        window?.opener?.postMessage?.(JSON.stringify({success,token,login_state:false}), pageURL);
    }
    render(){
        const {text}=this.props
        const onClick=()=>window.close()
        return(
            <DisplayAlert text={text}>
                <BlueBTN_hover>
                    <button type="button" className="btn btn-primary" onClick={onClick}>Return to pageview</button>
                </BlueBTN_hover>
            </DisplayAlert>
        )
    }
}