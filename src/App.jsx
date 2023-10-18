import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
