import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

// we will wrap our whole app in app provider
// without children in the code below, the entire app wiill spit out errors
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {' '}
      {children}
    </AppContext.Provider>
  )
}

// another way of going about it by creating our custom hooks
// note when creating a custom hook you have to start the name by use......
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
// import AppProvider in index.js where we will wrap our entire app in app provider
