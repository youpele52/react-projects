import React from 'react'

import data from './data'

const List = () => {
  const [people, setPeople] = React.useState(data)
  const del = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id)
      return newPeople
    })
  }
  return (
    <>
      <h3>{people.length} birthday(s) today</h3>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div className='person-detail'>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button
                className='btn'
                onClick={() => {
                  del(id)
                }}
              >
                remove
              </button>
            </div>
          </article>
        )
      })}
      <button
        className='btn'
        onClick={() => {
          setPeople([])
        }}
      >
        Clear all
      </button>
    </>
  )
}

export default List
