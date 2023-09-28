import React, {Component} from "react";
import Form from 'react-bootstrap/Form';

export default class Check extends Component{
    render(){
        const {value, onChange}=this.props
        return <Form.Check key={value} type="checkbox" label={value} value={value} id="formHorizontalRadios1" className="custom-control custom-radio custom-control-inline" onChange={onChange}/>
    }
}