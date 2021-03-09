import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { getByTitle } from '@testing-library/dom'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()
  // console.log(cocktails)
  if (loading) {
    return <Loading />
    // return <Loading></Loading>
  }
  if (cocktails.length < 1) {
    return <h2 className='section-title'>No cocktail like that in the bar </h2>
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>

      <div className='cocktails-center'>
        {cocktails.map((item) => {
          // we are passing in each item or drink (and its attributes to our Cocktail component)
          return <Cocktail key={item.id} {...item}></Cocktail>
          // <Cocktail key={item.id} {...item}></Cocktail> comp will display the individual drinks not as a list
        })}
      </div>
    </section>
  )
}

export default CocktailList
