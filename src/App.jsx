import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Notfound from './pages/Notfound'
import AdminDashboard from './pages/AdminDashboard'
import Register from './components/authenticationComponents/Register'
import Login from './components/authenticationComponents/Login'
import ForgetPassword from './components/authenticationComponents/ForgetPassword'
import UserNav from './components/adminComponents/users/UserNav'
import Topnav from './components/layout/Topnav'
import TeacherDashBoard from './pages/TeacherDashBoard'
import { QuizPage } from './components/adminComponents/Quiz/QuizPage'
import { QuizView } from './components/adminComponents/Quiz/QuizView'
import Otp from './components/authenticationComponents/Checkcode'
import AdminProfile from './components/adminComponents/users/AdminProfile'
import Prooo from './components/adminComponents/users/Prooo'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/otp' element={<Otp/>}/>
      <Route path='/pro' element={<Prooo/>}/>

      <Route path='/profile' element={<AdminProfile/>}/>
      <Route path='/topnav' element={<Topnav/>}/>
      <Route path='/navbar' element={<UserNav/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/teacherDashboard' element={<TeacherDashBoard/>}/>
      <Route path='/quiz/*' element={<QuizPage/>}/>
      <Route path='/quizview/*' element={<QuizView/>}/>
      <Route path='*' element={<Notfound/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
