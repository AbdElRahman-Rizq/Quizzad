import '../../../assets/css/Navbar.css'
import vector from '../../../assets/images/admin.png'

export default function UserNav() {
    return (
<div>
  <nav className="navbar navbar-expand-lg">
    <div className="container mx-4 mt-2">
      <h1 className="navbar-brand p-2 text-light fs-4" href="#">Users</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">Teachers</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">Students</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">New Requests</a>
          </li>
        </ul>
        <div className="admin">
          <img src={{vector}} />
        </div>
      </div>
    </div>
  </nav>
</div>

)}
