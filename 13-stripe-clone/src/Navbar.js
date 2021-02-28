import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    // to grab the text when our mouse hover
    const page = e.target.textContent
    // to grab the location when our mouse hover
    const tempBtn = e.target.getBoundingClientRect()
    // getting the center of the 'btn' location
    const center = (tempBtn.left + tempBtn.right) / 2
    // the bottom of the btn
    // here we subtracted 3px to lift our submenu up a little bit
    const bottom = tempBtn.bottom - 3
    // console.log(page, tempBtn, center, bottom)
    openSubmenu(page, { center, bottom })
  }

  const handleSubmenu = (e) => {
    // in the navbar all the buttons have a class name of 'link-btn'
    // so if any of the element in the navbar that we do mouse over that does not have that 'link-btn' className
    // then we close our submenu
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe-logo' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              {/* this name products must match the text value of the key page in data.js  */}
              products
            </button>
          </li>
          <li>
            {' '}
            <button className='link-btn' onMouseOver={displaySubmenu}>
              {/* this name products must match the text value of the key page in data.js  */}
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              {/* this name products must match the text value of the key page in data.js  */}
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
