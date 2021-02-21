import React, { useState, useEffect } from 'react'
// rgbToHex converts rgb values to hex values
import rgbToHex from './utils'
// colorShade and index are both coming from App.js
// colorShade is an object that contains rgb, alpha, type and weight
// here we only need rgb and weight from colorShade and index
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  // rgb is an array of numbers, so here we join this number using comma, the result is a string
  const rgbString = rgb.join(',')
  // console.log(rgbString)
  const hex = rgbToHex(...rgb)
  // NOTE
  //  hexColor is from color library we are using to get the different shades of a color
  // hex is hex value we get when we use the rgbToHex func to get the hex values from the given rgb value
  // we can use either hex or hexColors
  const hexValue2 = `#${hex}`
  const hexValue = `#${hexColor}`

  const copyToClipBoard = () => {
    setAlert(true)
    // now this is how you copy to Clipboard using JS
    // where hexValue is the item or text we are copyinbg to clipboard
    navigator.clipboard.writeText(hexValue)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    // cleaning up
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <article
      // checks the index, if it is greater than 10 or 9, sets the className to color-light, else set it to color
      className={`color ${index > 9 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgbString})` }}
      // we set up onClick on the whole article, not a button
      onClick={copyToClipBoard}
    >
      <p className='percent-value'>{weight}</p>
      <p className='color-value'>{hexValue}</p>
      {/* if alert is true set className to alert and create a paragraph */}
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
