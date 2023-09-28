import React, {Component} from 'react';
import OnloadAnimatedContainer from '../OnloadAnimatedContainer';

export default class Backend extends Component{
    state={
        endpoints:[],
    }
    componentDidMount(){
        fetch(`${this.props.url}/`)
        .then(res=>res.json())
        .then(res=>this.setState({endpoints:res.endpoints}))
        .catch(err=>console.log(err))
    }
    render(){
        const {endpoints}=this.state
        return(
            <OnloadAnimatedContainer>
                Endpoints:
                {
                    endpoints?.map(x=><div>{x}</div>)
                }
            </OnloadAnimatedContainer>
        )
    }
}