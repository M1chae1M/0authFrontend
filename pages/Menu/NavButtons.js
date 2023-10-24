import {Component} from "react"
import LinkTo from "./LinkTo"
import Router from "next/router"
import {ContextOfAuthHOC} from "../login/AuthHoc"
import BlueBTN_hover from "../CRUD/BlueBTN_hover"

export default class NavButtons extends Component{
    state={
        path:'/',
    }
    componentDidMount(){
        const path=Router.asPath.split('?')[0]?.split('/')[1]
        this.setState({path:path})
    }
    render(){
        const {path}=this.state
        const style={
            display:'grid',
            gridAutoFlow:'column',
            gridGap:'5px',
        }
        return(
            <ContextOfAuthHOC.Consumer>
            {value=>{
                const {logged}=value??{}
                return(
                    <div style={style}>
                        <div className="nav nav-pills">
                            <LinkTo path={path} h={''}/>
                            <LinkTo logged={logged} path={path} h='login'/>
                            <LinkTo logged={logged} path={path} h='signin'/>
                            <LinkTo path={path} h='resource_code'/>
                        </div>
                    </div> 
                )
            }}
            </ContextOfAuthHOC.Consumer>
        )
    }
}