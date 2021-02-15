import React from 'react'

const Categories = ({ filterItems, categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        // we have a list so in the return we'll pass in key
        return (
          <button
            key={index}
            type='button'
            className='filter-btn'
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
