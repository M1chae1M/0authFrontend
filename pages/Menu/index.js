import ProfileMenu from "./ProfileMenu";
import MenuHeader from "./MenuHeader";
import {Navbar, Nav} from 'react-bootstrap';
import React,{Component} from "react";
import Router from "next/router";
import NavPills from "./NavPills";

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
            c:{
                display:'grid',
                gridAutoFlow:'column',
                gridGap:'5px',
                justifyContent:'center',
            },
            d:{
                display:'grid',
                justifyItems:'center',
            },
            Navbar:{
                Navbar:{
                    position:'relative',
                    display:'grid',
                    justifyItems:'center',  
                },
                Collapse:{
                    margin:'5px',
                }
            }
        }
        return(
            <div style={style.c}>
                <div style={style.d}>
                <MenuHeader>CRUD</MenuHeader>
                    <Navbar expand="lg" style={style.Navbar.Navbar}>
                        <Navbar.Toggle/>
                        <Navbar.Collapse style={style.Navbar.Collapse}>
                            <Nav className="retractable">
                                <NavPills path={path}/>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <ProfileMenu/>
            </div>
        )
    }
}