import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import Education from '../pages/education/education.jsx';
import { } from './mobile-navbar.js'

export default function NavBar() {
    return (

        <Router>
            <div>
                <header>
                    <nav>
                        <NavLink to="/" className="logo">Projeto de instrução ao arduino</NavLink>

                        <ul className="nav-list">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/education">Contato</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <div id="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/education" element={<Education />} />

                    </Routes>
                </div>
            </div>


        </Router>


    )

}
