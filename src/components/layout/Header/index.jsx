import { useNavigate } from 'react-router-dom';
import './index.css'
import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize';

export default function Header() {
    return (
        <div>
            <nav className='nav'>
                <div className="nav-wrapper blue main-nav">
                    <ul id="nav-mobile" className="position-fixed hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}