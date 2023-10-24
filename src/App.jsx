import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Notfound from './pages/Notfound'
import AdminDashboard from './pages/AdminDashboard'
import Register from './components/authenticationComponents/Register'
import Login from './components/authenticationComponents/Login'
import ForgetPassword from './components/authenticationComponents/ForgetPassword'
import Checkcode from './components/authenticationComponents/Checkcode'
import UserNav from './components/adminComponents/users/UserNav'
import Topnav from './components/layout/Topnav'
import StudentTable from './components/adminComponents/users/StudentTable'
import NewRequest from './components/adminComponents/users/NewRequest'
import TeacherDashBoard from './pages/TeacherDashBoard'
import { QuizList } from './components/adminComponents/Quiz/quizList'
import { SearchBar } from './components/adminComponents/Quiz/searchBar'
import { QuizNav } from './components/adminComponents/Quiz/QuizNav'
import { QuizPage } from './components/adminComponents/Quiz/QuizPage'
import { SideNav } from './components/layout/SideNav'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/checkcode' element={<Checkcode/>}/>
      <Route path='/topnav' element={<Topnav/>}/>
      <Route path='/navbar' element={<UserNav/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/teacherDashboard' element={<TeacherDashBoard/>}/>
      <Route path='/quizList' element={<QuizList/>}/>
      <Route path='/searchBar' element={<SearchBar/>}/>
      <Route path='/quiznav' element={<QuizNav/>}/>
      <Route path='/quizpage' element={<QuizPage/>}/>
      <Route path='/sidenav' element={<SideNav/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
