import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className='logo'>
                <h2>Logo</h2>
            </div>
            <ul className='links'>
                <li>Home</li>
                <li>About</li>
                <li>Video</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
