import {Component} from "react";
import DisplayAlert from "@/pages/Modal/DisplayAlert";

export default class LoginResult extends Component{
    componentDidMount(){
        window.opener.postMessage('login_state: false', '*')
    }
    render(){
        const {text}=this.props
        const closeWindow=()=>window.close()
        return(
            <DisplayAlert text={text}>
                <button type="button" className="btn btn-primary" onClick={closeWindow}>Wróć</button>
            </DisplayAlert>
        )
    }
}