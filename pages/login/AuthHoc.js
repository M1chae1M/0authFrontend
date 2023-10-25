import React,{Component} from "react"
import Router from "next/router"
import {createFetch} from "../_app"
import Menu from "../Menu";
import Modal from "../Modal";
import Spinner from "../Modal/Spinner";

export const ContextOfAuthHOC=React.createContext()

const AuthHOC=(ToWrap)=>(
    class HOC extends Component{
        state={
            logged:false,
            login_loading_state:false,
            login:'login',
            password:'login',
            email:'',
            age:'',
        }
        isLogged(comp){
             createFetch('logged',{},(data)=>{
                const path=Router.asPath.split('?')[0]?.split('/')[1];
                comp.setState({logged:data.logged},()=>{
                    data.logged && (path==='login' || path==='signin') && Router?.push?.('/');
                })
            })
        }
        shouldComponentUpdate(nextProps, nextState){
            const {logged,login_loading_state,login,password,email,age}=this.state
            const isFormChanged=nextState.login!==login || nextState.password!==password || nextState.email!==email || nextState.age!==age
            if(nextState.logged!==logged || nextState.login_loading_state!==login_loading_state || isFormChanged) return true
            return false; 
        }
        componentDidMount(){
            this.isLogged(this)
        }
        componentDidUpdate(){
            this.isLogged(this)
        }
        render(){
            const {url}=this.props
            const {login_loading_state,login,password,email,age,logged}=this.state
            const formData={login,password,email,age}
            const isLoggedFunction=()=>this.isLogged(this)
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
                    this.setState({login_loading_state:false, logged:data.success??true})
                    data.success && Router?.push?.('/');
                })
            }
            const loginFunction=(e)=>{
                const {login,password}=this.state
                loginCreator(e, 'login', {username:login,password})
            }
            const signinWithLogin=(e)=>{
                const {login,password,email,age}=this.state
                loginCreator(e, 'signin', {username:login,password,email,age})
            }
            const logout=()=>{
                localStorage.removeItem('token')
                this.setState({logged:false},isLoggedFunction())
            }
            return(
                <ContextOfAuthHOC.Provider value={{logged,logout,isLoggedFunction,changeV,login,formData,loginFunction,url}}>
                    <Menu/>
                    <ToWrap loginFunction={loginFunction} isLoggedFunction={isLoggedFunction} logged={logged} signinWithLogin={signinWithLogin} changeAuthHOC={changeAuthHOC} url={url} {...this.props}/>
                    <Modal show={login_loading_state}>
                        <Spinner/>
                    </Modal>
                </ContextOfAuthHOC.Provider>
            )
        }
    }
)

export default AuthHOC