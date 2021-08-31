import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link className='navbar-links' to='/about'>
                About us
            </Link>
            <Link className='navbar-links' to='/posts'>
                Posts
            </Link>
        </div>
    )
}
export default Navbar