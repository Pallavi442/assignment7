import React,{useState} from 'react';
import './NavbarMain.css';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom'; 
import hamburger from '../../images/quill_hamburger.png';
import { RxCross1 } from "react-icons/rx";

function NavbarMain() {

    const [dropdownMenu, setDropdownMenu] = useState(null);
    const [navOpen, setNavOpen] = useState(false);
  
    const handleMouseHover = (menu) => {
      setDropdownMenu(menu);
    };
  
    const handleMouseLeave = () => {
      setDropdownMenu(null);
    };
  
    const handleClose=()=>{
      setNavOpen(null)
    }
    
    const toggleNav = () => {
      setNavOpen(!navOpen); 
    };
  
  return (
    <div className='nav-container'>
      <div className='hamburger' onClick={toggleNav}>
       <img src={hamburger}/>
      </div>
      <div className={`top-nav ${navOpen ?'menu-active' : ''}`}>
      <div className='closeicondiv'>
          <RxCross1 onClick={handleClose} className='closeIcon'/>
          </div>
        <ul>
          <li style={{color:'orange'}}>Personal |</li>
          <li>NRI |</li>
          <li>SME |</li>
          <li>Wholesale |</li>
          <li>Agri |</li>
        </ul>
      </div>
      <div className='hamburger' onClick={toggleNav}>
       <img src={hamburger}/>
      </div>
      <div className={`bottom-nav ${navOpen ?'menu-active' : ''}`}>
      <div className='closeicondiv'>
          <RxCross1 onClick={handleClose} className='closeIcon'/>
          </div>
        {/* <ul>
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
        </ul> */}
           <ul>
            {['Home', 'Pay', 'Save', 'Invest', 'Loan', 'Insures'].map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseHover(index)}
                onMouseLeave={handleMouseLeave}
                className={dropdownMenu === index ? 'active' : ''}
              >
                <a>{item}</a>
                {dropdownMenu === index && (
                  <div className="dropdown dropdown2">
                    <ul>
                      <li>Option 1</li>
                      <li>Option 2</li>
                      <li>Option 3</li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
            {/* <li>
              <img src={hamburger}/>
            </li> */}
          </ul>
      </div>
      <div className='url-container'>
        <ul>
          <li style={{color:'grey'}}>Personal \</li>
          <li>Loans \</li>
          <li>Apply for loan \</li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarMain;
