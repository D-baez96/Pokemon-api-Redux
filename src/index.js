import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { compose,applyMiddleware, legacy_createStore as createStore } from 'redux';
import {  logger } from './middlewares';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';




const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhacers = compose(applyMiddleware(thunk,logger)); 

const store = createStore(rootReducer, composedEnhacers);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);


reportWebVitals();
