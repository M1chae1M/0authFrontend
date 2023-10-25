import {Component} from "react";
import {BiLogoGithub,BiLogoGoogle,BiLogoFacebookCircle} from 'react-icons/bi'
import Button from 'react-bootstrap/Button';
import BlueBTN_hover from "../CRUD/BlueBTN_hover";
import {Router} from "next/router";

const height='44px'

export default class LoginLogos extends Component{
    state={
        messageData:{},
    }
    componentDidMount(){
        window.addEventListener('message', (e)=>{
            if(e?.data){
                const {login_state}=e.data
                console.log(e.data.success)
                if(login_state===false){
                    changeAuthHOC({login_loading_state:false});
                    e?.data?.success && Router?.push?.('/');
                }
            }
        })
    }
    render(){
        const {url,changeAuthHOC}=this.props
        const logos={
            display:'grid',
            gridAutoFlow:'column',
            justifyItems:'center',
            alignItems:'center',
            fontSize:height,
            lineHeight:height,
            justifyContent:'space-evenly',
            color:'#0b5ed7',
        }
        const logo={
            cursor:'pointer'
        }
        const authenticate=(method)=>{
            const authWindow=window.open(`${url}/auth/${method}`, `Authenticate with ${method}`, 'width=650,height=400,resizable=false,scrollbars=false');
            changeAuthHOC({login_loading_state:true});
            authWindow.onbeforeunload=()=>changeAuthHOC({login_loading_state:false})
            const checkAuthWindowInterval=setInterval(()=>{
                if(authWindow && authWindow.closed){
                    clearInterval(checkAuthWindowInterval);
                    changeAuthHOC({login_loading_state:false});
                }
            }, 500);
        }
        return(
            <div style={logos}>
                <BlueBTN_hover><Button variant="primary" type="submit" style={{height}}>Submit</Button></BlueBTN_hover>
                <BlueBTN_hover><BiLogoGithub style={logo} onClick={()=>{authenticate('github')}}/></BlueBTN_hover>
                <BlueBTN_hover><BiLogoGoogle style={logo} onClick={()=>{authenticate('google')}}/></BlueBTN_hover>
                <BlueBTN_hover><BiLogoFacebookCircle style={logo} onClick={()=>{authenticate('facebook')}}/></BlueBTN_hover>
            </div>
        )
    }
}