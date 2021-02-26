import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  // thiis how you access the value inside of <AppContext.Provider>
  // const data = useContext(AppContext)
  // another way of accessing the value......
  // const data = useGlobalContext()
  // console.log(data)
  const { openSidebar, openModal } = useGlobalContext()

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        Show modal
      </button>
    </main>
  )
}

export default Home
