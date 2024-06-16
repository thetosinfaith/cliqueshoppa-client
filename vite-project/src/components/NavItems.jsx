import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/images/logo/logo.png';

const NavItems = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSocialVisible, setSocialVisible] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(false);

    window.addEventListener('scroll', () =>{
        if (window.scrollY > 200) {
            setHeaderFixed(true);
          } else {
            setHeaderFixed(false);
          }
    });


    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    
    
    return (
        <header className={`header-section style-4 ${isHeaderFixed ? 'header-fixed fadeInUp' : ''}`} style={{ backgroundColor: isHeaderFixed ? '#690896' : 'transparent', color: isHeaderFixed ? '#ffffff' : '#000000' }}>
    
        <div className={`header-top d-md-none ${isSocialVisible ? 'open' : ''}`}>
          <div className='container'>
            <div className='header-top-area'>
    
              <Link to="/signup" className="lab-btn me-3">
                <span>Sign Up For Free</span>
              </Link>
    
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
    
        {/* header button */}
        <div className='header-button'>
          <div className='container'>
            <div className='header-wrapper'>
    
              {/* logo */}
              <div className='logo-search-acte'>
                <div className='logo'>
                  <Link to="/">
                    <img src={logo} alt="Logo" /> 
                  </Link>
                </div>
              </div>
    
              {/* header menu */}
              <div className='menu-area'>
                <div className='menu'>
                  <ul className={`lab-ul ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to='/products'>Product Categories</Link></li>
                    <li><Link to='/reseller'>Become a Reseller</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                  </ul>
                </div>
    
                {/* sign in & log in */}
                <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block' style={{ backgroundColor: '#690896', color: 'white' }}>
                    Sign Up For Free
                </Link>
    
                <Link to="/login" className='d-none d-md-block'>Log In</Link>
    
                {/* menu toggler */}
                <div className={`header-bar d-lg-none ${isMenuOpen ? 'active' : ''}`} style={{ color: '#690896' }} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>

</div>
</div>

</div>
</div>
</div>
</header>
);
};

export default NavItems;