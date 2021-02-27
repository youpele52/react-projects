import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  // this how the page looks like in context.js
  // const [page, setPage] = useState({ page: '', links: [] })
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const container = useRef(null)

  const [columns, setColumns] = useState('col-2')

  // this is for the mouseOver dropdown effect
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current // this gets the node
    const { center, bottom } = location
    // in-line CSS
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
    // this re-renders anytime location and links value changes
  }, [location, links])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4> {page} </h4>
      {/* dynamically change the size of the submenu bar based on the size of the content */}
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
