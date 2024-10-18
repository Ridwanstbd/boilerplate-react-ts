import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About"

const AppRoutes: React.FC = () => {
    const location = useLocation()
    useEffect(() => {
        const path = location.pathname

        switch(path){
            case '/':
                document.title = "Home"
                break
            case '/contact' :
                document.title = "Contact"
                break
            case '/about' :
                document.title = "About"
                break
            default :
                document.title = "My React App"
        }
    }, [location])
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    )
}

export default AppRoutes