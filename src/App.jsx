import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Notfound from './pages/Notfound'
import Register from './components/authenticationComponents/Register'
import Login from './components/authenticationComponents/Login'
import Otp from './components/authenticationComponents/Otp'
import ForgetPassword from './components/authenticationComponents/ForgetPassword'
import ResetPassword from './components/authenticationComponents/ResetPassword'
import PendingPage from './components/authenticationComponents/PendingPage'
import Topnav from './components/layout/Topnav'
import { QuizView } from './components/adminComponents/Quiz/QuizView'
import MiniDash from './components/layout/MiniDash'
import WelcomeSide from './components/layout/WelcomeSide'
import EditProfile from './components/profile/EditProfile'
import { AdminView } from './pages/AdminView'
import QuestionForm from './components/teacherComponents/Quiz/QuestionForm'
import ProfileView from './components/profile/ProfileView'
import { TeacherView } from './pages/TeacherView'
import StudentView from './pages/StudentView'
import Congratulations from './components/studentComponents/TakingQuiz/Congratulations'
import TakeQuiz from './components/studentComponents/TakingQuiz/TakeQuiz'
import AdminTable from './components/adminComponents/users/AdminTable'
import TeacherTable from './components/adminComponents/users/TeacherTable'
import StudentTable from './components/adminComponents/users/StudentTable'

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
      {/* waraki's Test */}
      <Route path='/EditProfile' element={<EditProfile/>}/>
      <Route path='/welcome' element={<WelcomeSide/>}/>
      <Route path='/mini' element={<MiniDash/>}/>
      <Route path='/profileview' element={<ProfileView/>}/>
      <Route path='/pending' element={<PendingPage/>}/>
      <Route path='/reset' element={<ResetPassword/>}/>
      {/* waraki */}
      <Route path='/quizview/*' element={<QuizView/>}/>
      <Route path='*' element={<Notfound/>}/>
{/* Rizq's Test */}
      <Route path='/Result' element={<Congratulations/>}/>
      <Route path='/Takequiz' element={<TakeQuiz/>}/>
      <Route path='/question' element={<QuestionForm/>}/>
{/* Final project */}
      <Route path='/admin/*' element={<AdminView/>}/>
      <Route path='/teacher/*' element={<TeacherView/>}/>
      <Route path='/student/*' element={<StudentView/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
