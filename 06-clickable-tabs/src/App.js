import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// this is an api mock up
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  // fetching the jobs from the api
  const fetchJobs = async () => {
    const response = await fetch(url)
    // converting the api to json
    const newJobs = await response.json()
    // after we get the newJobs data from the api, we update our usestate of jobs
    setJobs(newJobs)
    setLoading(false) //we are no longer loading
  }

  useEffect(() => {
    fetchJobs()
    // [] makes useEffect runs only on the initial render
  }, [])

  // if the page is still loading this appears
  if (loading) {
    return (
      <section className='section loading'>
        <h2>loading...</h2>
      </section>
    )
  }

  // our api is an array containing dictionary. each element is a dictionary, here we destructure the dict
  // duties is an array containing strings
  // after fetchJobs() is called in useEffect function, it fetches the data from the api and pass that data
  // unto jobs , a usestate which initial value is []
  // since the api is an array we iterate through that array using value, useState initially set to 0
  const { id, order, title, dates, duties, company } = jobs[value]

  // if we have successfully gotten the jobs from our api this appears on the page
  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              // clicking the buton changes the statevalue of value to index,
              // index will corresponds to the index of the element job/item on the array(api)
              // changes this index, changes what will be displayed on the screen
              <button
                key={job.id}
                className={`job-btn ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}
              >
                {' '}
                {job.company}
              </button>
            )
          })}
        </div>

        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>

          <p className='job-date'>{dates}</p>

          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
