import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Contact/Contact';
import Home from './Home/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import CartItems from './Cart/CartItems';
import { ProductsList } from './products/ProductsList';
import ProductsGrid from './products/ProductsGrid';
import App from './App';

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'


const persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <App/>

      </PersistGate>
    </Provider>
  </BrowserRouter>
     
  



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
