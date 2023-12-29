import {getToken} from "./getToken"
import CONFIG from '@/config/config.json'
const {url}=CONFIG

import action from "@/STORE/action"
import appStore from "@/STORE/store"

export function selectAll(){
    const {page,limit}=this.props
  
    return fetch(`${url}/all/${page}/${limit}`,{
        method:'POST',
        credentials:'include',
        headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},
        body:JSON.stringify({token:getToken()})
    })
    .then(res=>res.json())
    // .then(({selected_pages})=>this.setState({db:{selected_pages}, db_loading:false}))
    .then(({selected_pages, page})=>{
        this.setState({db:selected_pages, db_loading:false})
        appStore.dispatch(action.change_state({page}))
    })
    .catch(error=>this.setState({db:[],db_loading:false},()=>console.error('Błąd logowania:', error)))
}