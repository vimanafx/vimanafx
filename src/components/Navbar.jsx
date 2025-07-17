import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import mainLogo from '../assets/logo.png'; 


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={mainLogo} alt="VimanaFX Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
