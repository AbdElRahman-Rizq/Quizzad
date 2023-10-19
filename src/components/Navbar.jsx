import React from 'react'
import '../style/Navbar.css'
import vector from '../assets/images/admin.png'

export default function Navbar() {
    return (
<div>
    <nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="#">Quizzes</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#">All Quizzes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My Quizzes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">New Quiz</a>
                </li>
            </ul>
            <div className="admin">
                <img src={vector}></img>
            </div>
        </div>
    </div>
    </nav>
</div>
    )
}
