import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../Buttons/MyButton'

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
    }
    return (
        <div className='navbar'>
            <MyButton onClick={logout}>Go out</MyButton>
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