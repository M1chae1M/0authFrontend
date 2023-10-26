import CONFIG from '../config/config.json'
import '../styles/scrollbar.css';

export const fields=['id','name','age','email','city','country','occupation','salary']
export const CRUD=['select','insert','update','delete']

const url=CONFIG.production?CONFIG.url:'http://localhost:8080'

export default function App({Component, pageProps}){
  return <Component {...pageProps} url={url}/>
}

function getToken(){
  return localStorage?.getItem?.('token')??''
}

export async function createFetch(path, body, callback=null){
  fetch(`${url}/${path}`,{
    method:'POST',
    credentials:'include',
    headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},
    body:JSON.stringify({...body, token:getToken()})
  })
  .then(res=>res.json())
  .then(data=>{
    if(callback){
      callback(data)
    }
  })
  .catch(error =>console.error('Błąd logowania:', error));
}

export function selectAll(component,page,limit){
  fetch(`${url}/all/${page}/${limit}`,{
    method:'POST',
    credentials:'include',
    headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},
    body:JSON.stringify({token:getToken()})
  })
  .then(res=>res.json())
  .then((data)=>component.setState({db:data, db_loading:false}))
  .catch(error=>{
    console.error('Błąd logowania:', error)
    component.setState({db:[],db_loading:false})
  })
}

export const toUpperCase1Char=(text)=>text?.charAt?.(0)?.toUpperCase?.()+text?.slice?.(1)