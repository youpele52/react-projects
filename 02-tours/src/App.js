import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN,
// api
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([]) //this is default to an empty array because the used api is an array

  // removeTour func removes one of the tours that user clicks 'not interested',
  // although toursData was fetched in this file,  the id and other details of each Tour is in Tour.js
  // so we create the function here only to export it to Tour.js where it can function properly
  const removeTour = (id) => {
    // this creates a new list of the Tours excluding the tour which the id matches the inputted id
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  //  fetching the tour data from the api
  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const toursData = await response.json()
      setLoading(false)
      setTours(toursData)
      console.log(toursData)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    // in here we call fetchtours, thus the func runs only when the compenent is rendered....once
    fetchTours()
    // using [] to make sure use effect only runs once when the component renders
  }, [])

  if (loading) {
    return (
      <main>
        {' '}
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      {/* tours props = tours state value> We pass in the state value of tours to tours props
      so that we can use the value in the Tours component, file Tour.js */}
      {/* also here we pass in a removeTour function into removeTour prop, so that we can be able to 
      access the function in Tours.js. passing function as props */}
      <Tours tours={tours} removeTour={removeTour} />{' '}
    </main>
  )
}

export default App
