import React, {Component} from 'react';
import OnloadAnimatedContainer from '../OnloadAnimatedContainer';
import Headers from '../Headers';
import GoToRepo from '../GoToRepo';
import List from '../List';

class Frontend extends Component{
    state={
        endpoints:[],
        problems:[],
        used_package:[],
    }
    componentDidMount(){
        fetch(`${this.props.url}/`)
        .then(res=>res.json())
        .then(res=>this.setState({
            endpoints:res.frontend.endpoints,
            problems:res.frontend.problems,
            used_package:res.frontend.used_package,
        }))
        .catch(err=>console.log(err))
    }
    render(){
        const {endpoints,problems,used_package}=this.state
        const EndpointsList=()=><List array={endpoints}/>
        const ProblemsList=()=><List array={problems}/>
        const PackageList=()=><List array={used_package}/>
        return(
            <OnloadAnimatedContainer>
                <Headers>Backend:</Headers>
                <div>Backend powstał przy użyciu:</div>
                <PackageList/>
                <div>Problemy podczas tworzenia aplikacji</div>
                <ProblemsList/>
                Endpoints:
                <EndpointsList/>
                <div>Cały kod dostępny jest w repozytorium pod adresem:</div>
                <GoToRepo href='0authFrontend'/>
            </OnloadAnimatedContainer>
        )
    }
}

export default Frontend;