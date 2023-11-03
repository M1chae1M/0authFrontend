import ProfileMenu from "./ProfileMenu";
import MenuHeader from "./MenuContainer/MenuNav/MenuHeader";
import {Navbar, Nav} from 'react-bootstrap';
import React,{Component} from "react";
import Router from "next/router";
import NavPills from "./NavPills";
import MenuNav from "./MenuContainer/MenuNav";
import MenuContainer from "./MenuContainer";
import Toggle from "./MenuContainer/MenuNav/Toggle";

export default class Menu extends Component{
    state={
        path:'/',
        display:'',
    }
    componentDidMount(){
        const path=Router?.asPath?.split('?')[0]?.split('/')[1]
        this.setState({path:path})
    }
    render(){
        const {path,display}=this.state
        const style={
            Navbar:{
                position:'relative',
                display:'grid',
                justifyItems:'center',  
            },
            Collapse:{
                margin:'5px',
            },
            retractable:{
                padding:'10px',
                display,
                justifyItems:'center',
            },
        }
        const changeDisplay=(newState)=>this.setState({display:newState})
        return(
            <MenuContainer>
                <MenuNav>
                    <MenuHeader>CRUD</MenuHeader>
                    <Navbar expand="lg" style={style.Navbar}>
                        <Toggle change={changeDisplay}/>
                        <Navbar.Collapse style={style.Collapse}>
                            <Nav style={style.retractable}>
                                <NavPills path={path}/>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </MenuNav>
                <ProfileMenu/>
            </MenuContainer>
        )
    }
}