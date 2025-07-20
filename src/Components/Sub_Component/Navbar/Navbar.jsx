import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { LucideMenu, X} from 'lucide-react'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
     <header>

          <nav>
            <h1>ADO-ODO-OTA HOTELIERS ASSOCIATION</h1>
            <ul>
              <li><Link to={'/'} className='link'>Home</Link></li>
              <li><Link to={'/about'} className='link'>About</Link></li>
              <li><Link to={'/events'} className='link'>Events</Link></li>
              <li><Link to={'/leadership'} className='link'>Leadership</Link></li>
              <li><Link to={'/membership'} className='link'>Membership</Link></li>
              <li><Link to={'/contact'} className='link'>Contact</Link></li>
            </ul>
            <LucideMenu size={30} className='menu' onClick={handleMenu}/>
          </nav>

          {showMenu ?
          <>
          <div className="over-lay">
            <div className="sideBar">

              <X size={24} className='cancel-icon' onClick={handleMenu}/>

              <ul>
              <li><Link to={'/'} className='link'>Home</Link></li>
              <li><Link to={'/about'} className='link'>About</Link></li>
              <li><Link to={'/events'} className='link'>Events</Link></li>
              <li><Link to={'/leadership'} className='link'>Leadership</Link></li>
              <li><Link to={'/membership'} className='link'>Membership</Link></li>
              <li><Link to={'/contact'} className='link'>Contact</Link></li>
              </ul>
            </div>
          </div>
          </> 
          
          : 
          
          <></>}
      </header>
    </>
  )
}

export default Navbar