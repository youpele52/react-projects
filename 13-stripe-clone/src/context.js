import React, { useState, useContext } from 'react'
import App from './App'
import sublinks from './data'

const AppContext = React.createContext()

// note must pass in children
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubmenu = (text, coordinates) => {
    //   getting the correct respective page anytime we do mouseover
    // we find the page (text) that is coming from the button ie when we mouse over the menus
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {' '}
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
