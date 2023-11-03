import LoginResult from "../../LoginResult";
import React, {Component} from "react";

export default class Failure extends Component{
  render(){
    return <LoginResult text='Failure! Something has gone wrong. Try again, or use another authorization method.'/>
  }
}