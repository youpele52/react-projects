import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ image, name, id, info, glass, instruction, category }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>

        <p>
          {info}/{category}
        </p>
        <p>For your Pleasure: {instruction}</p>
        {/* this Link will take us to the full details or single page of the clicked cocktail */}
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          Details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
