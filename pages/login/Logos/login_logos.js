import {Component} from "react";
import {BiLogoGithub,BiLogoGoogle,BiLogoFacebookCircle} from 'react-icons/bi'
import Button from 'react-bootstrap/Button';
import BlueBTN_hover from "../../components/BlueBTN_hover";
import CONFIG from '@/config/config.json'
import LogosContainer from ".";
import { connect } from "react-redux";
import action from "@/STORE/auth/action";
const {height,url}=CONFIG??{}

class LoginLogos extends Component{
    state={
        messageData:{},
    }
    componentDidMount(){
        window.addEventListener('message',(e)=>{
            if(e?.data){
                const {login_state}=e.data
                if(login_state===false) this.props.stop_waiting_for_login()
            }
        })
    }
    render(){
        const {stop_waiting_for_login,start_waiting_for_login}=this.props
        const logo={
            cursor:'pointer'
        }
        const authenticate=(method)=>{
            const authWindow=window.open(`${url}/auth/${method}`, `Authenticate with ${method}`, 'width=650,height=400,resizable=false,scrollbars=false');
            start_waiting_for_login();
            authWindow.onbeforeunload=()=>stop_waiting_for_login();
            const checkAuthWindowInterval=setInterval(()=>{
                if(authWindow && authWindow.closed){
                    clearInterval(checkAuthWindowInterval);
                    stop_waiting_for_login();
                }
            }, 500);
        }
        return(
            <LogosContainer>
                <BlueBTN_hover><Button variant="primary" type="submit" style={{height}}>Submit</Button></BlueBTN_hover>
                <BlueBTN_hover><BiLogoGithub style={logo} onClick={()=>{authenticate('github')}}/></BlueBTN_hover>
                <BlueBTN_hover><BiLogoGoogle style={logo} onClick={()=>{authenticate('google')}}/></BlueBTN_hover>
                {/* <BlueBTN_hover><BiLogoFacebookCircle style={logo} onClick={()=>{authenticate('facebook')}}/></BlueBTN_hover> */}
            </LogosContainer>
        )
    }
}

const mapStateToProps=({auth:{login_loading_state}})=>({login_loading_state})
const mapDispatchToProps=(dispatch)=>({
    stop_waiting_for_login:()=>dispatch(action.stop_waiting_for_login()),
    start_waiting_for_login:()=>dispatch(action.start_waiting_for_login()),
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginLogos)