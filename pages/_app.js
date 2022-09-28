import '../styles/globals.css'
import store from '../src/store/Index';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
