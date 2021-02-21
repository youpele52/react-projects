import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [shades, setShades] = useState(1)
  // setting a default color value
  const [colorList, setColorList] = useState(new Values('#9acd32').all(shades))

  const handleSubmit = (e) => {
    // e means event object and not error
    e.preventDefault()

    try {
      setShades((shades) => {
        if (shades > 0 && shades < 100) {
          let shadesInt = parseInt(shades)
          return setShades(shadesInt)
        }
      })
      // Values is from the color library we imported from values.js
      // this below creates 10 shades of whatever color is inputted
      let colors = new Values(color).all(shades)
      setColorList(colors)
      console.log(shades)
    } catch (error) {
      setError(true)
      // alert('Enter a valid colour hex code')
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Colour generator</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor='color'>Colour</label>
          <input
            type='text'
            name='color'
            id='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#9acd32'
            // setting a className conditionally
            // if error state is true (default is false) , set className to error, if it is false set it to null
            className={`${error ? 'error' : null}`}
          />

          <label htmlFor='shade'>Shades</label>
          <input
            type='number'
            name='shades'
            id='shades'
            value={shades}
            onChange={(e) => setShades(e.target.value)}
          />

          <button className='btn' type='submit'>
            generate
          </button>
        </form>
      </section>
      <section className='colors'>
        {colorList.map((colorShade, index) => {
          // console.log(colorShade)
          // colorShade is an object that contains rgb, alpha, type and weight
          // but we pass in the entire content of colorShade and index to SingleColor.js

          return (
            <SingleColor
              key={index}
              {...colorShade}
              index={index}
              hexColor={colorShade.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
