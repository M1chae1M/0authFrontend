import React,{Component} from "react"
import Router from "next/router"
import {createFetch} from "../_app"
import Menu from "../Menu";
import Modal from "../Modal";
import Spinner from "../Modal/Spinner";
import Element from "../CRUD/Forms/columns/Element";
import Form from 'react-bootstrap/Form';

const {Label, Control}=Form

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
            showProfileState:false,
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
            const {showProfileState}=this.state
            const formData={login,password,email,age}
            const isLoggedFunction=()=>this.isLogged(this)
            const changeAuthHOC=(newState)=>this.setState(newState)
            const changeV=(e)=>{
                const {name,value}=e.target
                this.setState({[name]:value})
            }
            const showProf=(newState)=>this.setState({showProfileState:newState})
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
            const FormElement=({name, type})=>(
                <Element>
                    <Label>{name.charAt(0).toUpperCase() + name.slice(1)}: </Label>
                    <Control type={type} placeholder={`Enter your ${name}`} name={name} value={formData?.[name]} onChange={changeV}/>
                </Element>
            )
            return(
                <ContextOfAuthHOC.Provider value={{logged,logout,isLoggedFunction,changeV,login,formData,loginFunction,url,showProf,showProfileState,FormElement}}>
                    <Menu/>
                    <ToWrap
                    showProf={showProf}
                    showProfileState={showProfileState}
                    isLoggedFunction={isLoggedFunction} logged={logged} signinWithLogin={signinWithLogin} changeV={changeV} changeAuthHOC={changeAuthHOC} url={url} {...this.props}/>
                    <Modal show={login_loading_state}>
                        <Spinner/>
                    </Modal>
                </ContextOfAuthHOC.Provider>
            )
        }
    }
)

export default AuthHOC