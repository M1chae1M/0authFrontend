import React,{PureComponent} from 'react'
import Router from 'next/router'
import {createFetch} from '@/functions/createFetch';
import Menu from '../Menu';
import Modal from '../Modal';
import Spinner from '../Modal/Spinner';
import LoginMessage from './loginMessage';

export const ContextOfAuthHOC=React.createContext()

const AuthHOC=(ToWrap)=>(
    class HOC extends PureComponent{
        state={
            logged:false,
            login_loading_state:false,
            login:'login',
            password:'login',
            email:'',
            age:'',
            showSelected:false,
            loginMessage:'',
            success:false,
        }
        isLogged(){
             createFetch('logged',{},(data)=>{
                const path=Router.asPath.split('?')[0]?.split('/')[1];
                this.setState({logged:data.logged},()=>{
                    data.logged && (path==='login' || path==='signin') && Router?.push?.('/');
                })
            })
        }
        componentDidMount=()=>this.isLogged()
        componentDidUpdate=()=>this.isLogged()
        render(){
            const {url}=this.props
            const {login_loading_state,login,password,email,age,logged,showSelected,loginMessage,success}=this.state
            const formData={login,password,email,age}
            const isLoggedFunction=()=>this.isLogged()
            const changeAuthHOC=(newState)=>this.setState(newState)
            const changeV=({target})=>{
                const {name,value}=target
                this.setState({[name]:value})
            }
            const loginCreator=(e, path, send)=>{
                e.preventDefault()
                this.setState({login_loading_state:true})

                createFetch(`${path}`,send,(data)=>{
                    localStorage.setItem('token',data.token);
                    this.setState({login_loading_state:false, logged:data.success??true,loginMessage:data.message,success:data.success})
                })
            }
            const loginFunction=(e)=>{
                const {password,email}=this.state
                loginCreator(e, 'login', {username:email,password})
            }
            const signinWithLogin=(e)=>{
                const {login,password,email,age}=this.state
                loginCreator(e, 'signin', {username:login,password,email,age})
            }
            const logout=()=>{
                localStorage.removeItem('token')
                this.setState({logged:false},isLoggedFunction())
            }
            const closeLoginMessage=()=>this.setState({loginMessage:''},()=>success && Router?.push?.('/'))
            return(
                <ContextOfAuthHOC.Provider value={{logged,logout,isLoggedFunction,changeV,login,formData,loginFunction,url,showSelected,changeAuthHOC}}>
                    <Menu/>
                    <ToWrap loginFunction={loginFunction} isLoggedFunction={isLoggedFunction} logged={logged} signinWithLogin={signinWithLogin} changeAuthHOC={changeAuthHOC} url={url} {...this.props}/>
                    <Modal show={login_loading_state || (!login_loading_state && loginMessage!=='')}>
                    {
                        login_loading_state?
                            <Spinner/>:
                        <LoginMessage text={loginMessage} onClick={closeLoginMessage}/>
                    }
                    </Modal>
                </ContextOfAuthHOC.Provider>
            )
        }
    }
)

export default AuthHOC