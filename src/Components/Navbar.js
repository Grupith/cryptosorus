import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className='logoWrapper'>
                <img src='/logo.png' className='logo' alt='logo' />
                <span className='title'>Cryptosorus</span>
            </div>
            <ul>
                <li>Home</li>
                <li>Lists</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

export default Navbar
