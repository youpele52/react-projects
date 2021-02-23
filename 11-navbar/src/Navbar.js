import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter, FaUserFriends } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  // we use this to adjust the height of the links in navbar based on the total number of links we have
  useEffect(() => {
    // this gives alot of info about the ul element where the links Ref is like
    //  DOMRect {x: 0, y: 79, width: 770, height: 200, top: 79, …}
    // const linksHeight = linksRef.current.getBoundingClientRect()
    // this gets the height of the element ul
    // we can use this height to do some things
    const linksHeight = linksRef.current.getBoundingClientRect().height
    // console.log(linksHeight)
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
    // anytime showLinks changes our use effect callback will re-render
  }, [showLinks])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* conditional rendering using css classes */}
        {/* <div
          className={`${
            showLinks ? 'links-container  show-container' : 'links-container'
          }  `}
        > */}
        {/* using useref  */}
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {social.map((socialMedia) => {
            const { id, url, icon } = socialMedia
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
