import LoginResult from "../../LoginResult";
import React, {Component} from "react";

export default class Failure extends Component{
  render(){
    return <LoginResult text='Failure! Coś poszło nie tak. Spróbuj ponownie, lub skorzystaj z innej metody autoryzacji.'/>
  }
}