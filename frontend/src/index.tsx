import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Store from './state/Store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);