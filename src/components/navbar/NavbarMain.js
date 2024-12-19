import React from 'react';
import './NavbarMain.css';
import { FaAngleDown } from "react-icons/fa6";

function NavbarMain() {
  return (
    <div className='nav-container'>
        <div className='top-nav'>
            <ul>
                <li>Personal |</li>
                <li>NRI |</li>
                <li>SME |</li>
                <li>Wholesale |</li>
                <li>Agri |</li>
            </ul>

        </div>
        <div className='bottom-nav'>
            <ul>
                <li>Home <FaAngleDown /></li>
                <li>Pay <FaAngleDown /></li>
                <li>Save <FaAngleDown /></li>
                <li>Invest <FaAngleDown /></li>
                <li>Loans <FaAngleDown /></li>
                <li>Insure <FaAngleDown /></li>
            </ul>
        </div>
        <div className='url-container'>
        <ul>
                <li>Personal \</li>
                <li>Loans \</li>
                <li>Apply for loan \</li>
            </ul>
        </div>
    </div>
  )
}

export default NavbarMain