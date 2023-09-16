import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import Education from '../pages/education/education.jsx';
import {} from './mobile-navbar.js'

export default function NavBar() {
    return (
        
        <Router>
            <div>
                <header>
                    <nav>
                        <NavLink to="http://google.com" className="logo">Não sei o que faço</NavLink>
                        <div className='mobile-menu'>
                            <div className='line1'></div>
                            <div className='line2'></div>
                            <div className='line3'></div>
                        </div>
                        <ul className="nav-list">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/education">Education</NavLink></li>
                            <li><NavLink to="/experience">Experience</NavLink></li>
                            <li><NavLink to="/projects">Projects</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
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
