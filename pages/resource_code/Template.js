import React, {Component} from 'react';
import OnloadAnimatedContainer from './OnloadAnimatedContainer';
import Headers from './Headers';
import GoToRepo from './GoToRepo';
import List from './List';
import {toUpperCase1Char} from '../_app';

export default class Template extends Component{
    state={
        endpoints:[],
        problems:[],
        used_package:[],
    }
    componentDidMount(){
        const {variant,url}=this.props
        fetch(`${url}/`)
        .then(res=>res.json())
        .then(res=>this.setState({
            endpoints:res?.[variant]?.endpoints,
            problems:res?.[variant]?.problems,
            used_package:res?.[variant]?.used_package,
        }))
        .catch(err=>console.log(err))
    }
    render(){
        const {variant}=this.props
        const {endpoints,problems,used_package}=this.state
        const EndpointsList=()=><List array={endpoints}/>
        const ProblemsList=()=><List array={problems}/>
        const PackageList=()=><List array={used_package}/>
        const name=toUpperCase1Char(variant)
        return(
            <OnloadAnimatedContainer>
                <Headers>{name}:</Headers>
                <div>{name} powstał przy użyciu:</div>
                <PackageList/>
                <div>Problemy podczas tworzenia aplikacji</div>
                <ProblemsList/>
                Endpoints:
                <EndpointsList/>
                <div>Cały kod dostępny jest w repozytorium pod adresem:</div>
                <GoToRepo href={`0auth${name}`}/>
            </OnloadAnimatedContainer>
        )
    }
}