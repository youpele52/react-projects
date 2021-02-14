// this component is for one Tour, thus singular

import React, { useState } from 'react'

// we are inheriting the tour properties froms Tours.js and we are passing all the properties we need here
const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />

      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        {/*  `${info.substring(0, 190)}` this creates a new string that is from char 0 to 190 of the orginal string */}
        <p>
          {readMore ? info : `${info.substring(0, 190)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less' : 'Read More'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
