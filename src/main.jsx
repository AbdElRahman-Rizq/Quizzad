import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.js' 
import 'bootstrap-icons/font/bootstrap-icons.json'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UserContextProvider } from './Contex/UserContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App />
 </UserContextProvider>
)
