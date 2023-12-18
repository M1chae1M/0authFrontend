import {getToken} from '@/functions/getToken';
import { url } from '@/pages/_app';

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
    .catch(error=>console.error('Błąd logowania:', error));
}