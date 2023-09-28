import {Component} from "react";
import {BiLogoGithub,BiLogoGoogle,BiLogoFacebookCircle} from 'react-icons/bi'
import Button from 'react-bootstrap/Button';

const height='44px'

export default class LoginLogos extends Component{
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
            const authWindow=window.open(`${url}/auth/${method}`, `Authenticate with ${method}`, 'width=650,height=400');
            changeAuthHOC({login_loading_state:true});
            authWindow.onbeforeunload=()=>changeAuthHOC({login_loading_state:false})
            authWindow.addEventListener('message', (event)=>{
                if(event.origin==='http://localhost:3000'){
                    console.log('origin:', event.origin);
                    if(event.data === 'login_state: false'){
                        changeAuthHOC({login_loading_state:false});
                    }
                }
            });
            const checkAuthWindowInterval=setInterval(()=>{
                if(authWindow && authWindow.closed){
                    clearInterval(checkAuthWindowInterval);
                    changeAuthHOC({login_loading_state:false});
                }
            }, 500);
        }
        return(
            <div style={logos}>
                <Button variant="primary" type="submit" style={{height}}>Submit</Button>
                <BiLogoGithub style={logo} onClick={()=>{authenticate('github')}}/>
                <BiLogoGoogle style={logo} onClick={()=>{authenticate('google')}}/>
                <BiLogoFacebookCircle style={logo} onClick={()=>{authenticate('facebook')}}/>
            </div>
        )
    }
}