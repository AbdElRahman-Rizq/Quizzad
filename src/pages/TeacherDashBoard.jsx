import UserNav from '../components/adminComponents/users/UserNav'
import TeacherTable from '../components/adminComponents/users/TeacherTable'
import AdminSidebar from '../components/layout/AdminSidebar'
import "../style/Dashboard.css"

export default function TeacherDashBoard() {
    return (
        <div>
            <section className='TecherDash'>
                    <div className="row ps-2">
                        <div className="col-md-4">
                        <AdminSidebar/>
                        </div>
                        <div className="col-md-8 pt-4 rightSideDashboard ps-2">
                            <UserNav/>
                            <TeacherTable/>
                        </div>
                    </div>
            </section>
        </div>
    )
}
