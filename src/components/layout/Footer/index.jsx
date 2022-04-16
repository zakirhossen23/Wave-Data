import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize';

export default function Footer() {
    return (
        <footer className="footer" style={{ paddingTop: 64 }}>
        <div className="container container--large" style={{ boxSizing: "border-box",display: "flex",flexDirection: "column",flexGrow: 1,maxWidth: 1200,margin: "0 auto",padding: 0,width: "100%"}}>
          <div className="footer__wrapper" style={{flexDirection: "row",margin: "0 0 40px",display: "flex",flexWrap: "nowrap"}}>
            <div className="footer__left" style={{alignItems: "center",flexDirection: "row",justifyContent: "space-between",width: "14%"}}>
              <a href="/" >
                <img src="/favicon.ico" style={{ display: "block", width: 142 }} />
              </a>
            </div>
            <div className="footer-nav" style={{ display: "flex", flexWrap: "wrap" }}>
              <div className="footer-nav__col"style={{flex: "none",paddingLeft: 40,display: "flex",justifyContent: "flex-start",flexDirection: "column",alignContent: "flex-start"}}>
                <div className="footer-nav__col-title"style={{display: "inline-block",fontSize: 20,fontWeight: 500,letterSpacing: "0.75px",textAlign: "left",marginBottom: 16,textDecoration: "none"}}>
                  RESOURCE LINKS
                </div>
                <ul className="footer-nav__list" style={{border: "0 none",margin: 0,padding: 0,display: "flex",flexDirection: "column",alignContent: "flex-start",alignItems: "flex-start"}}>
                  <li>
                    <a href="/work">How does it work?</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/stories">Sotries of users</a>
                  </li>
                  <li>
                    <a href="/about">About us!</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__right" />
          </div>
        </div>
      </footer>    


    )
}