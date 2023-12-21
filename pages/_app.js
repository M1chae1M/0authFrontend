import CONFIG from '@/config/config.json'
import '../styles/scrollbar.css';
import appStore from '../STORE/store';
import {Provider} from 'react-redux';
const {url}=CONFIG

const App=({Component, pageProps})=>(
  <Provider store={appStore}>
    <Component {...pageProps} url={url}/>
  </Provider>
)

export default App