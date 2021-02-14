import React, { useState } from 'react'
import people from './data'
// font awesome coming from the react icon library
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(4)
  // when the index value changes, the person will be accessing will also change.
  const { name, job, image, text } = people[index]

  // checks if the number index is greater than the size of the array or negative
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }
  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const random = () => {
    // this let part is used so that the random number genrated will never repeat itself in a row
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  console.log(people)

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <button className='prev-btn' onClick={() => prev()}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => next()}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={() => random()}>
        Surprise Me
      </button>
    </article>
  )
}

export default Review
