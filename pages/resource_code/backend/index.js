import React, {Component} from 'react';
import OnloadAnimatedContainer from '../OnloadAnimatedContainer';
import Headers from '../Headers';

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
                <Headers>Backend:</Headers>

                Endpoints:
                {
                    endpoints?.map((x,i)=><div key={i}>{x}</div>)
                }


                <div>
                    Cały kod dostępny jest w repozytorium pod adresem:
                </div>
                <div>
                    https://github.com/M1chae1M/0authBackend
                </div>
            </OnloadAnimatedContainer>
        )
    }
}