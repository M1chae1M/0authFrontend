import LoginResult from "../LoginResult";
import React, { Component } from "react";

export default class Success extends Component{
  render(){
    return <LoginResult text='Success! Już wiemy, że ty, to ty. Teraz możesz wrócić do przeglądania naszej strony.'/>
  }
}