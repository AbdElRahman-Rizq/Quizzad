import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Notfound from './pages/Notfound'
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
import { SideBar } from './components/layout/SideBar'
// import Prooo from './components/adminComponents/users/Prooo'
import MiniDash from './components/layout/MiniDash'
import WelcomeSide from './components/layout/WelcomeSide'
import ProfileForm from './components/adminComponents/users/ProfileForm'
import AdminUsers from './pages/AdminUsers'
import DashBoardPage from './components/adminComponents/DashBoard/DashBoardPage'
import { ClassPage } from './components/adminComponents/class/ClassPage'

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
      <Route path='/profile' element={<AdminProfile/>}/>
      <Route path='/profilee' element={<AdminProfile/>}/>
      <Route path='/topnav' element={<Topnav/>}/>
      <Route path='/navbar' element={<UserNav/>}/>
      <Route path='/adminUsers' element={<AdminUsers/>}/>
      <Route path='/teacherDashboard' element={<TeacherDashBoard/>}/>
      {/* waraki */}
      <Route path='/abc' element={<ProfileForm/>}/>
      <Route path='/welcome' element={<WelcomeSide/>}/>
      <Route path='/mini' element={<MiniDash/>}/>
      <Route path='/admin' element={<DashBoardPage/>}/>
      {/* waraki */}
      <Route path='/quiz/*' element={<QuizPage/>}/>
      <Route path='/class/*' element={<ClassPage/>}/>
      <Route path='/quizview/*' element={<QuizView/>}/>
      <Route path='/sidebar/*' element={<SideBar/>}/>
      <Route path='*' element={<Notfound/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
