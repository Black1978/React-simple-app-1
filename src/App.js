import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/Navbar/Navbar'
import { AuthContext } from './context'
import './styles/App.css'

function App() {
    const [isAuth, setIsAuth] = useState(null)
    useEffect(() => {
        
    }, [])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
export default App
