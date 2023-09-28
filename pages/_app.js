export const fields=['id','name','age','email','city','country','occupation','salary']
export const CRUD=['select','insert','update','delete']

const url='http://localhost:8080'

export default function App({ Component, pageProps}){
  return <Component {...pageProps} url={url}/>
}

export function selectAll(component){
  fetch(`${url}/all`,{
    method:'POST',
    credentials:'include',
    headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},
    body:JSON.stringify({})
  })
  .then(res=>res.json())
  .then(({data})=>component.setState({db:data, db_loading:false}))
  .catch(error=>{
    console.error('Błąd logowania:', error)
    component.setState({db:[],db_loading:false})
  });
}

export async function createFetch(path, body, callback=null){
  fetch(`${url}/${path}`,{
    method:'POST',
    credentials:'include',
    headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},
    body:JSON.stringify(body)
  })
  .then(res=>res.json())
  .then(data=>{
    if(callback){
      callback(data)
    }
  })
  .catch(error =>console.error('Błąd logowania:', error));
}