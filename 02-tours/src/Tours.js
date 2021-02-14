// this component displays all the tours, according to how each is made in Tour.js

import React from 'react'
import Tour from './Tour'
// tour component
// tours props {tours} value is tours state value coming from the tours useState in App.js
// removeTour is the prop (its real value is function) which is coming from App.js
// passing function as props
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Available tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          // using {...tour} to get access to all the property in the object, list
          // remember the tour value we took from App.js and pass as a prop in this file Tours.js
          // now we are going to pass every property/element in that to Tour.js this return below does that
          // here we pass in that removeTour prop(func) to Tour.js
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        })}
      </div>
    </section>
  )
}

export default Tours
