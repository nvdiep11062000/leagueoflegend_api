import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">

    <div className="logo">
        <Link to="/"><img src={logo} alt='logo'/></Link>
    </div>

    <div className="pc-nav">
        <ul className="nav">
            <li className="nav-item"><Link to="#">giới thiệu</Link></li>
            <li className="nav-item"><Link to="#">espost</Link></li>
            <li className="nav-item"><Link to="/championshow">tướng</Link></li>
            <li className="nav-item"><Link to="#">nạp thẻ</Link></li>
            <li className="nav-item"><Link to="#">hỗ trợ</Link></li>
            <li className="nav-item"><Link to="#">tải game</Link></li>
            

        </ul>
    </div>

 </header>
  )
}

export default Header