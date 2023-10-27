import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Notfound from './pages/Notfound'
import Register from './components/authenticationComponents/Register'
import Login from './components/authenticationComponents/Login'
import ForgetPassword from './components/authenticationComponents/ForgetPassword'
import Topnav from './components/layout/Topnav'
import { QuizPage } from './components/adminComponents/Quiz/QuizPage'
import { ClassPage } from './components/adminComponents/class/ClassPage'
import { QuizView } from './components/adminComponents/Quiz/QuizView'
import Otp from './components/authenticationComponents/Checkcode'
import MiniDash from './components/layout/MiniDash'
import WelcomeSide from './components/layout/WelcomeSide'
import ProfileForm from './components/adminComponents/profile/ProfileForm'
import AdminUsers from './components/adminComponents/users/AdminUsers'
import { AdminView } from './pages/AdminView'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/otp' element={<Otp/>}/>
      {/* <Route path='/pro' element={<Prooo/>}/> */}
      <Route path='/topnav' element={<Topnav/>}/>
      <Route path='/adminUsers' element={<AdminUsers/>}/>
      {/* waraki */}
      <Route path='/abc' element={<ProfileForm/>}/>
      <Route path='/welcome' element={<WelcomeSide/>}/>
      <Route path='/mini' element={<MiniDash/>}/>
      {/* waraki */}

      <Route path='/admin/*' element={<AdminView/>}/>
      <Route path='/quizview/*' element={<QuizView/>}/>
      <Route path='*' element={<Notfound/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
