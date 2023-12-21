import {getToken} from "./getToken"
import CONFIG from '@/config/config.json'
const {url}=CONFIG

export function selectAll(){
    const {page,limit}=this.props
  
    fetch(`${url}/all/${page}/${limit}`,{
        method:'POST',
        credentials:'include',
        headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},
        body:JSON.stringify({token:getToken()})
    })
    .then(res=>res.json())
    .then((data)=>this.setState({db:data, db_loading:false}))
    .catch(error=>this.setState({db:[],db_loading:false},()=>console.error('Błąd logowania:', error)))
}