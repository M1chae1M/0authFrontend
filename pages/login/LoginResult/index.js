import {Component} from "react";
import DisplayAlert from "@/pages/Modal/DisplayAlert";
import BlueBTN_hover from "@/pages/CRUD/BlueBTN_hover";
import CONFIG from '../../../config/config.json'
const {frontend}=CONFIG

const pageURL=`${frontend}/login`

export default class LoginResult extends Component{
    state={
        success:false,
        token:null,
    }
    componentDidMount(){
        const url_params=new URLSearchParams(window.location.search);
        const success=url_params.get("success")??false;
        const token=url_params.get('token')??'';
        window.history.pushState({}, '', window.location.pathname);
        this.setState({success, token})
        window?.opener?.postMessage?.(JSON.stringify({success,token,login_state:false}), pageURL);
        localStorage.setItem('token',token);
    }
    render(){
        const {text}=this.props
        // const onClick=()=>window.close()
        const onClick=()=>{
            const {success, token}=this.state
            window?.opener?.postMessage?.(JSON.stringify({success,token,login_state:false}), pageURL);
            window.close()
        }
        return(
            <DisplayAlert text={text}>
                <BlueBTN_hover>
                    <button type="button" className="btn btn-primary" onClick={onClick}>Wróć</button>
                </BlueBTN_hover>
            </DisplayAlert>
        )
    }
}