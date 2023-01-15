import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authSlice from './redux/authSlice';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    authSlice: authSlice
})

export const store = configureStore({
    reducer: rootReducer
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> <App/> </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
