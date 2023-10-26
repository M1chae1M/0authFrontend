import ProfileMenu from "./ProfileMenu";
import MenuHeader from "./MenuHeader";
import NavButtons from "./NavButtons";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import LinkTo from "./LinkTo";
import {ContextOfAuthHOC} from "../login/AuthHoc";
import React,{Component} from "react";
import Router from "next/router";

const style={
    position:'sticky',
    top:'0',
    left:'0',
    width:'100%',
    display:'grid',
    justifyItems:'center',
    userSelect:'none',
    zIndex:1401,
    background:'white',
}



const Menu2=()=>(
    <div style={style}>
        <MenuHeader>CRUD</MenuHeader>
        {/* <NavButtons/> */}

            <ContextOfAuthHOC.Consumer>
            {value=>{
                const {logged}=value??{}
                return(
     
                            <Navbar expand="lg">
                                {/* <Navbar.Brand>Your Logo</Navbar.Brand> */}
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                    {/* <Nav.Link href="/">Home</Nav.Link> */}
                                    {/* <Nav.Link href="/about">About</Nav.Link> */}
                                    {/* <div>test</div> */}
                                    {/* <div>test</div> */}



                                    {/* <NavButtons/> */}
                            <LinkTo path={path} h={''}/>
                            <LinkTo logged={logged} path={path} h='login'/>
                            <LinkTo logged={logged} path={path} h='signin'/>
                            <LinkTo path={path} h='resource_code'/>





                                    {/* <NavDropdown title="Services" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/service1">Service 1</NavDropdown.Item>
                                        <NavDropdown.Item href="/service2">Service 2</NavDropdown.Item>
                                        <NavDropdown.Item href="/service3">Service 3</NavDropdown.Item>
                                    </NavDropdown> */}
                                    {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
        )
    }}
    </ContextOfAuthHOC.Consumer>
    <ProfileMenu/>

    </div>
)

class Menu extends Component{
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
            display:'grid',
            gridAutoFlow:'column',
            gridGap:'5px',
            justifyContent:'center',
        }
        return(
            <div style={style}>
                <div style={{
                    display:'grid',
                    justifyItems:'center',
                }}>

            <MenuHeader>CRUD</MenuHeader>
            {/* <NavButtons/> */}
    
                <ContextOfAuthHOC.Consumer>
                {value=>{
                    const {logged}=value??{}
                    return(
                                <Navbar
                                expand="lg"
                                >
                                    <Navbar.Toggle
                                    // aria-controls="basic-navbar-nav"
                                    />

                                    <Navbar.Collapse
                                    // id="basic-navbar-nav"
                                    >
                                        <Nav
                                        // className="ml-auto"
                                        >


                    <div>
                        <div className="nav nav-pills">
                            <LinkTo path={path} h={''}
                            // style={style}
                            />
                        </div>
                    </div> 
                    <div>
                        <div className="nav nav-pills">
                            <LinkTo logged={logged} path={path} h='login'
                            // style={style}
                            />
                       </div>
                    </div> 
                    <div>
                        <div className="nav nav-pills">
                            <LinkTo logged={logged} path={path} h='signin'
                            // style={style}
                            />
                        </div>
                    </div> 
                    <div>
                        <div className="nav nav-pills">
                            <LinkTo path={path} h='resource_code'
                            // style={style}
                            />
                        </div>
                    </div> 







                    {/* <div style={style}>
                        <div className="nav nav-pills">
                            <LinkTo path={path} h={''}/>
                        </div>
                    </div> 
                    <div style={style}>
                        <div className="nav nav-pills">
                            <LinkTo logged={logged} path={path} h='login'/>
                       </div>
                    </div> 
                    <div style={style}>
                        <div className="nav nav-pills">
                            <LinkTo logged={logged} path={path} h='signin'/>
                        </div>
                    </div> 
                    <div style={style}>
                        <div className="nav nav-pills">
                            <LinkTo path={path} h='resource_code'/>
                        </div>
                    </div>  */}


                    {/* <div style={style} className="nav nav-pills">
                        <LinkTo path={path} h={''}/>
                    </div> 
                    <div style={style} className="nav nav-pills">
                        <LinkTo logged={logged} path={path} h='login'/>
                    </div> 
                    <div style={style} className="nav nav-pills">
                        <LinkTo logged={logged} path={path} h='signin'/>
                    </div> 
                    <div style={style} className="nav nav-pills">
                        <LinkTo path={path} h='resource_code'/>
                    </div>  */}


                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
            )
        }}
        </ContextOfAuthHOC.Consumer>
</div>
        <ProfileMenu/>
    
        </div>
        )
    }
}

export default Menu