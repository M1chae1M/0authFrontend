import CONFIG from '../config/config.json'
import '../styles/scrollbar.css';
import appStore from '../STORE/store';
import {Provider} from 'react-redux';
export const url=CONFIG?.production?CONFIG?.url:'0auth-backend.vercel.app'
// export const url=CONFIG?.production?CONFIG?.url:'http://localhost:8080'

const App=({Component, pageProps})=>(
  <Provider store={appStore}>
    <Component {...pageProps} url={url}/>
  </Provider>
)

export default App