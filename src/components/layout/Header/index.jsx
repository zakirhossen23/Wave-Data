import { useNavigate } from 'react-router-dom';
import './index.css'
import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize';

export default function Header() {
    return (
        <div>
            <nav className='nav'>
                <div className="nav-wrapper main-nav">

                    <ul id="nav-mobile" className="left med-and-down">
                        <a href='/' style={{ height: 64, width: 68, padding: 0 }}>
                            <img src="/favicon.ico" style={{ height: "100%", width: "100%", aspectRatio: 4 }} />
                        </a>
                        <li><a href="/work">How does it work?</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                    <ul id="nav-mobile" className="right med-and-down">
                        <li><a href="/stories">Stories of users</a></li>
                        <li><a href="/about">About us!</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Signup</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}