import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Notfound from './pages/Notfound'
import Register from './components/authenticationComponents/Register'
import Login from './components/authenticationComponents/Login'
import ForgetPassword from './components/authenticationComponents/ForgetPassword'
import Topnav from './components/layout/Topnav'

import { QuizPage } from './components/adminComponents/Quiz/QuizPage'
import { QuizView } from './components/adminComponents/Quiz/QuizView'
import Otp from './components/authenticationComponents/Checkcode'
import MiniDash from './components/layout/MiniDash'
import WelcomeSide from './components/layout/WelcomeSide'
import ProfileForm from './components/adminComponents/profile/ProfileForm'
import DashBoardPage from './components/adminComponents/DashBoard/DashBoardPage'
import AdminUsers from './components/adminComponents/users/AdminUsers'

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
      <Route path='/admin' element={<DashBoardPage/>}/>
      {/* waraki */}
      <Route path='/quiz/*' element={<QuizPage/>}/>
      <Route path='/quizview/*' element={<QuizView/>}/>
      <Route path='*' element={<Notfound/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
