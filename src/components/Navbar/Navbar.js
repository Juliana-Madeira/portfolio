import React from 'react';
import  { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <FaBars className='navbar_hamburguer' />
        <ul className='navbar_list'>
            <li className='navbar_list_item'><Link to='/'>Home</Link></li>
            <li className='navbar_list_item'><Link to='/about'>Sobre mim</Link></li>
            <li className='navbar_list_item'><Link to='/projects'>Projetos</Link></li>
            <li className='navbar_list_item'><Link to='/contact'>Contato</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;