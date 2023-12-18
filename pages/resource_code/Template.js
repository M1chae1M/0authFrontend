import React, {Component} from 'react';
import OnloadAnimation from './OnloadAnimatedContainer';
import Headers from './Headers';
import GoToRepo from './GoToRepo';
import List from './List';
import {toUpperCase1Char} from '../_app';
import {url} from '../_app';

export default class Template extends Component{
    state={
        endpoints:[],
        problems:[],
        used_package:[],
    }
    componentDidMount(){
        const {variant}=this.props
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
            <OnloadAnimation>
                <Headers>{name}:</Headers>
                <div>The {name} was created using:</div>
                <PackageList/>
                <div>Problems during application development:</div>
                <ProblemsList/>
                Endpoints:
                <EndpointsList/>
                <div>All code is available in the repository at:</div>
                <GoToRepo href={name}/>
            </OnloadAnimation>
        )
    }
}