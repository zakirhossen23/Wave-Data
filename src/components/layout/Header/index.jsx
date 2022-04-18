import './index.css'
import React from 'react';
import Cookies from 'js-cookie';
export default function Header() {
    function LoginBTN(){
        if (Cookies.get("login") != "true"){
            return(<><li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li></>)
        }else{
            return(<><li><a href="/trials">Dashboard</a></li></>)
        }
    }
    return (
        <div>
            <nav className="nav">
                <div className=" main-nav relative h-full flex justify-between">
                    <ul id="nav-mobile">
                        <div >
                            <a href="/" style={{ height: "100%", width: "100%" }}>
                                <img src="/favicon.ico" className='h-24 w-full' />
                            </a>
                        </div>
                        <li><a href="/work">How does it work?</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                    <ul id="nav-mobile" >
                        <li><a href="/stories">Stories of users</a></li>
                        <li><a href="/about">About us!</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <LoginBTN/>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}