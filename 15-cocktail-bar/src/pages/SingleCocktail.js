import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  // useParams is the hook react router provides so that we can get access to those unique values
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  const getCocktail = async () => {
    try {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()
      if (data.drinks) {
        // here we give all what we get from the data.drinks object an alias each
        // we destructure to get what we need: then we give it a concise alias
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strInstructions: instructions,
          strGlass: glass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktail = {
          name,
          image,
          info,
          ingredients,
          glass,
          category,
          instructions,
        }
        setCocktail(newCocktail)
      } else {
        setCocktail(null)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading></Loading>
  }
  // if cocktail is falsy ie null ie not available
  if (!cocktail) {
    return <h2 className='section-title'>Ouch! Missed that 😪!</h2>
  }

  const {
    name,
    image,
    info,
    ingredients,
    glass,
    category,
    instructions,
  } = cocktail
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back home
      </Link>
      <h2 className='section-title'>{name} </h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'> name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'> category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'> info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'> glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'> instructions :</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'> ingredients :</span>
            {ingredients.map((item, index) => {
              // if item is truthy return it else return null
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
