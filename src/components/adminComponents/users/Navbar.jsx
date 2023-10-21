import React from 'react'
import '../../../style/Navbar.css'
import vector from '../../../assets/images/admin.png'

export default function Navbar() {
    return (
<div>
    <nav class="navbar navbar-expand-lg">
    <div class="container mx-4 mt-2">
        <h1 class="navbar-brand p-2 text-light fs-4" href="#">Quizzes</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">All Quizzes</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">My Quizzes</a>
                </li>
                <li class="nav-item mx-2">
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
