import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import 'font-awesome/css/font-awesome.min.css'
import reportWebVitals from './reportWebVitals';
import Nav from './Nav'
import Firstcontainer from './Firstcontainer'
import Secondcontainer from './Secondcontainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav/>
    <Firstcontainer/>
    <Secondcontainer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
