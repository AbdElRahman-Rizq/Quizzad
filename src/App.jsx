import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import AdminDashboard from './pages/AdminDashboard'
import ForgetPassword from './pages/ForgetPassword'
import Checkcode from './pages/Checkcode'
import Navbar from './components/adminComponents/users/UserNav'
import Topnav from './components/layout/Topnav'
import StudentTable from './components/adminComponents/users/StudentTable'
import NewRequest from './components/adminComponents/users/NewRequest'
import TeacherDashBoard from './pages/TeacherDashBoard'
import { QuizList } from './components/adminComponents/Quiz/quizList'
import { SearchBar } from './components/adminComponents/Quiz/searchBar'
import { QuizNav } from './components/adminComponents/Quiz/QuizNav'
import { QuizPage } from './components/adminComponents/Quiz/QuizPage'
import { AdminSideNav } from './components/layout/AdminSideNav'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/checkcode' element={<Checkcode/>}/>
      <Route path='/studenttable' element={<StudentTable/>}/>
      <Route path='/newrequest' element={<NewRequest/>}/>
      <Route path='/topnav' element={<Topnav/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/teacherDashboard' element={<TeacherDashBoard/>}/>
      <Route path='/quizList' element={<QuizList/>}/>
      <Route path='/searchBar' element={<SearchBar/>}/>
      <Route path='/quiznav' element={<QuizNav/>}/>
      <Route path='/quizpage' element={<QuizPage/>}/>
      <Route path='/sidenav' element={<AdminSideNav/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
