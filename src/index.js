import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css';
import "semantic-ui-css/semantic.min.css";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/root.reducer'; //slight change from './reducers

const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// render((
//     {/*<Provider store={createStoreWithMiddleware(reducers)}>*/}
//         {/*<App />*/}
//     {/*</Provider>*/}
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>
// )
// document.getElementById('root'));
//
// registerServiceWorker();
render((
  <BrowserRouter >
    <App />
  </BrowserRouter>
), document.getElementById('root'));
