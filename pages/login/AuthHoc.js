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
            fetch(`${comp.props.url}/logged`,{
                method:'GET',
                credentials:'include',
                headers:{'Accept':'application/json','Content-Type':'application/json'}
            })
            .then(res=>res.json())
            .then(data=>{
                const path=Router.asPath.split('?')[0]?.split('/')[1];
                console.log(data)
                comp.setState({logged:data.logged})
                data.logged && (path==='login' || path==='signin') && Router?.push?.('/');
            })
            .catch(error =>console.error('Błąd logowania:', error));
        }
        shouldComponentUpdate(nextProps, nextState){
            const {logged,login_loading_state}=this.state
            if(nextState.logged!==logged || nextState.login_loading_state!==login_loading_state) return true
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
            const changeV=(e)=>{
                const {name,value}=e.target
                this.setState({[name]:value})
            }
            const loginCreator=(e, path, send)=>{
                e.preventDefault()
                this.setState({login_loading_state:true})
                createFetch(path,send,(data)=>{
                    console.log(data)
                    this.setState({login_loading_state:false, logged:data.success})
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
                createFetch('logout',{},(data)=>{
                    console.log(data)
                    this.setState({logged:false},isLoggedFunction())
                })
            }
            return(
                <ContextOfAuthHOC.Provider value={{logged,logout,isLoggedFunction}}>
                    <Menu/>
                    <ToWrap isLoggedFunction={isLoggedFunction} logged={logged} formData={formData} signinWithLogin={signinWithLogin} loginFunction={loginFunction} changeV={changeV} changeAuthHOC={changeAuthHOC} url={url} {...this.props}/>
                    <Modal show={login_loading_state}>
                        <Spinner/>
                    </Modal>
                </ContextOfAuthHOC.Provider>
            )
        }
    }
)

export default AuthHOC