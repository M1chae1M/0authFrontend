import ProfileMenu from "./ProfileMenu";
import MenuHeader from "./MenuHeader";
import {Navbar, Nav} from 'react-bootstrap';
import React,{Component} from "react";
import Router from "next/router";
import NavPills from "./NavPills";
import MenuNav from "./MenuContainer/MenuNav";
import MenuContainer from "./MenuContainer";

export default class Menu extends Component{
    state={
        path:'/',
    }
    componentDidMount(){
        const path=Router?.asPath?.split('?')[0]?.split('/')[1]
        this.setState({path:path})
    }
    render(){
        const {path}=this.state
        const style={
            Navbar:{
                position:'relative',
                display:'grid',
                justifyItems:'center',  
            },
            Collapse:{
                margin:'5px',
            }
        }
        return(
            <MenuContainer>
                <MenuNav>
                    <MenuHeader>CRUD</MenuHeader>
                    <Navbar expand="lg" style={style.Navbar}>
                        <Navbar.Toggle/>
                        <Navbar.Collapse style={style.Collapse}>
                            <Nav className="retractable">
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