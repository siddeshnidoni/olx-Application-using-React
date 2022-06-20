import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import BuyorSell from './pages/BuyorSell';
import Dashboard from './pages/Dashbaord';
import Category from './pages/Category';
import PostAd from "./pages/Postad"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUp" element={<Signup/>}/>
            <Route path="/BuyorSell" element={<BuyorSell/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Category" element={<Category/>}/>
            <Route path="/PostAd" element={<PostAd/>}/>
        </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
