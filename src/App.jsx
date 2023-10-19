import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import AdminDashboard from './pages/AdminDashboard'
import ForgetPassword from './pages/ForgetPassword'
import Checkcode from './pages/Checkcode'
import Navbar from './components/Navbar'
import Topnav from './components/Topnav'
import TeacherTable from './components/TeacherTable'
import StudentTable from './components/StudentTable'
import NewRequest from './components/NewRequest'
import TecherDashBoard from './components/TeacherDashBoard/TecherDashBoard'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/checkcode' element={<Checkcode/>}/>
      <Route path='/teachertable' element={<TeacherTable/>}/>
      <Route path='/studenttable' element={<StudentTable/>}/>
      <Route path='/newrequest' element={<NewRequest/>}/>
      <Route path='/topnav' element={<Topnav/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/hamada' element={<TecherDashBoard/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
