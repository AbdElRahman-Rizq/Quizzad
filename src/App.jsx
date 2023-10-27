import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Notfound from './pages/Notfound'
import Register from './components/authenticationComponents/Register'
import Login from './components/authenticationComponents/Login'
import ForgetPassword from './components/authenticationComponents/ForgetPassword'
import Otp from './components/authenticationComponents/Checkcode'
import Topnav from './components/layout/Topnav'
import { QuizPage } from './components/adminComponents/Quiz/QuizPage'
import { ClassPage } from './components/adminComponents/class/ClassPage'
import { QuizView } from './components/adminComponents/Quiz/QuizView'
import MiniDash from './components/layout/MiniDash'
import WelcomeSide from './components/layout/WelcomeSide'
// import Profile from './components/profile/Profile'
import { AdminView } from './pages/AdminView'
import QuestionForm from './components/teacherComponents/Quiz/QuestionForm'
import ProfileView from './components/profile/ProfileView'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/otp' element={<Otp/>}/>
      <Route path='/topnav' element={<Topnav/>}/>
      {/* waraki */}
      {/* <Route path='/profile' element={<Profile/>}/> */}
      <Route path='/welcome' element={<WelcomeSide/>}/>
      <Route path='/mini' element={<MiniDash/>}/>
      <Route path='/profileview' element={<ProfileView/>}/>
      {/* waraki */}
      <Route path='/admin/*' element={<AdminView/>}/>
      <Route path='/quizview/*' element={<QuizView/>}/>
      <Route path='*' element={<Notfound/>}/>
{/* Rizq's test */}
      <Route path='/question' element={<QuestionForm/>}/>
       

    </Routes>
    </BrowserRouter>
  )
}

export default App
