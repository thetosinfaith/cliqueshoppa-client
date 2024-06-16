import React from 'react'

const NavItems = () => {
    const [isMenuOpen, setMenuOpen] = (false);
    const [isSocialVisible, setSocialVisible] = useState(false);
    const [isHeaderFixed, setHeaderFixed] = useState(false);

    window.addEventListener('scroll', () =>{
        if(window.scrollY > 200)
            setHeaderFixed(true)

        else{
            setHeaderFixed(false)
        }
    })

  return (
    <header>
        <div>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to="/signup" className="registerButton me-3"><span>Sign Up For Free</span></Link>
                    <Link to="/login"><span>Login</span></Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems