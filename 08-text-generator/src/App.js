import React, { useState } from 'react'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    // e stands for event object
    e.preventDefault()
    // any number we get from an html form even if the type of the input is set to number,
    // that number is actually a string and not an actual number
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    } else if (count > 8) {
      amount = 8
    }

    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>Text Generator</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraph : </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          // e stands for event object
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item} </p>
        })}
      </article>
    </section>
  )
}

export default App
