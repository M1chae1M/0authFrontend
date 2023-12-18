import CONFIG from '../config/config.json'
import '../styles/scrollbar.css';
import appStore from '../STORE/store';
import {Provider} from 'react-redux';
import {getToken} from '@/functions/getToken';

export const url=CONFIG?.production?CONFIG?.url:'0auth-backend.vercel.app'
// export const url=CONFIG?.production?CONFIG?.url:'http://localhost:8080'

const App=({Component, pageProps})=>(
  <Provider store={appStore}>
    <Component {...pageProps} url={url}/>
  </Provider>
)

// export async function createFetch(path, body, callback=null){
//   fetch(`${url}/${path}`,{
//     method:'POST',
//     credentials:'include',
//     headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},
//     body:JSON.stringify({...body, token:getToken()})
//   })
//   .then(res=>res.json())
//   .then(data=>{
//     if(callback){
//       callback(data)
//     }
//   })
//   .catch(error=>console.error('Błąd logowania:', error));
// }

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

export default App