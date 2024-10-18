import React from "react"
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav className='p-2 text-start'>
          <Link to="/" className='px-4'>Home</Link>
          <Link to="/about" className='px-4'>About</Link>
          <Link to="/contact" className='px-4'>Contact</Link>
        </nav>
    )
}
export default Navbar
