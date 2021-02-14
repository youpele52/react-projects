import React from 'react'
import Review from './Review'
// importing the react icons library/component to use
import { FaGithubSquare } from 'react-icons/fa'

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App
