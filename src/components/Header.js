import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Search from './Search'

function Header() {
    return (
        <header className="header">
            <div className="header-col1">
                <h1><Link to="/">Webshop</Link></h1>
            </div>
                <Search/>
            <div className="header-col2">
                <ul className="header-menu">
                    
                    <li><Link to="/about">O nama</Link></li>
                    <li><Link to="/manage">Uređivanje</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
