import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import styled from "styled-components";

const BTN=styled(Navbar.Toggle)`
border:solid #007bff 2px;
position:relative;

&:focus{
  box-shadow: none;
}`

const toggleRef=React.createRef();

export default class MyComponent extends Component{
  componentDidMount(){
    const options={
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const {change}=this.props

    const callback=(entries)=>entries.forEach((entry)=>change(entry.isIntersecting?"grid":""))

    this.observer=new IntersectionObserver(callback, options);
    toggleRef.current && this.observer.observe(toggleRef.current);
  }
  componentWillUnmount(){
    toggleRef.current && this.observer.unobserve(toggleRef.current);
  }
  render(){
    return <BTN ref={toggleRef}/>
  }
}