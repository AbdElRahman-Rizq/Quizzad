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
<<<<<<< HEAD
  // <React.StrictMode>
  <UserContextProvider>
    <App />
  </UserContextProvider>
  // </React.StrictMode>
=======
  <UserContextProvider>
    <App />
 </UserContextProvider>
>>>>>>> e7854b7384c35e0d3f92729de320bab9fad9815a
)
