import React, { useContext } from 'react'
import MyButton from '../components/UI/Buttons/MyButton'
import MyInput from '../components/UI/Inputs/MyInput'
import { AuthContext } from '../context'

const Login = () => {
const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
    }
    return (
        <div>
            <form onSubmit={login}>
                <MyInput placeholder='Enter the login' />
                <MyInput placeholder='Enter the password' />
                <MyButton>Login</MyButton>
            </form>

        </div>
    )
}

export default Login