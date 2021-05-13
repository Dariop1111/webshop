import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-col1">
                <h2>Upoznajte nas</h2>
                <ul className="footer-menu">
                    <li><Link to="/about">O nama</Link></li>
                    <li><Link to="/about">Gdje smo</Link></li>                    
                    <li><Link to="/about">Česta pitanja</Link></li>
                    <li><Link to="/about">Kontakt</Link></li>
                </ul>
            </div>
            <div className="footer-col2">
                <h2>Plaćanje i dostava</h2>
                <ul className="footer-menu">
                    <li><Link to="/about">Dostava i povrat</Link></li>
                    <li><Link to="/about">Plaćanje i sigurnost</Link></li>                    
                    <li><Link to="/about">Uvijeti i prava</Link></li>
                    <li><Link to="/about">Kontakt</Link></li>
                </ul>
            </div>
            <div className="footer-col3">
                <h2>Podatci</h2>
            </div>
        </footer>
    )
}

export default Footer
