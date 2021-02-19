import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  // use effect to check for last index and reset the index
  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      // this line below make sure personIndex will never be zero to break our code
      setIndex(lastIndex)
    } else if (index > lastIndex) {
      setIndex(0)
    }
    // this useEffect runs again, once our index or people changes
  }, [index, people])

  // use effect for autoplay
  useEffect(() => {
    // every 3 seconds change the slides
    let autoplay = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    // using our cleanup func to make sure that our slider dont run mad
    return () => clearInterval(autoplay)
    // this useEffect runs again, once our index changes
  }, [index])

  return (
    <section className='section'>
      {/* suggestion: you can move the title to a separate component */}
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          // by default they will all get the nextSlide styling from the css
          let position = 'nextSlide' // nextSlide is a css className
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img className='person-img' src={image} alt={name} />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='quote'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button
          className='prev'
          onClick={() => {
            setIndex(index - 1)
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => {
            setIndex(index + 1)
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
