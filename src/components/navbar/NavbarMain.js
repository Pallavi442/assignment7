import React from 'react';
import './NavbarMain.css';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom'; 

function NavbarMain() {
  return (
    <div className='nav-container'>
      <div className='top-nav'>
        <ul>
          <li style={{color:'orange'}}>Personal |</li>
          <li>NRI |</li>
          <li>SME |</li>
          <li>Wholesale |</li>
          <li>Agri |</li>
        </ul>
      </div>
      <div className='bottom-nav'>
        <ul>
          <li>
            <Link to="/">Home</Link> <FaAngleDown />
          </li>
         
          <li>
            <Link to="/">Pay</Link> <FaAngleDown />
          </li>
          <li>
            <Link to="/">Save</Link> <FaAngleDown />
          </li>
          <li>
            <Link to="/">Invest</Link> <FaAngleDown />
          </li>
          <li style={{color:'orange'}}>
          <Link to="/loan" style={{color:'orange'}}>Loan</Link> <FaAngleDown /> 
          </li>
          <li>
            <Link to="/">Insure</Link> <FaAngleDown />
          </li>
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
  );
}

export default NavbarMain;
