import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav-header';
import Shop from './components/shop'
import Cart from './components/cart'
import Admin from './components/admin'
import Login from './components/login'
import Register from './components/register';
import Home from './components/home';
import ModalAddproduct from './components/modal-addproduct';
import Listorder from './components/list-order';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
              <Route path="/" element={<App />} />
              <Route path="/nav" element={<Nav />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/modal" element={<ModalAddproduct />} />
              <Route path="/orderlist" element={<Listorder />} />

        </Routes>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
