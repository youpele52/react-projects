import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  // so by default we are searching for 'a', any cocktail with a in its name
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

  // this fetch drinks would be used multiple times, anytime we type on the search bar, we will fetch from our api
  const fetchDrinks = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      // data here is an object containing array of cocktail objects that match the search term
      // drinks is the array
      const { drinks } = data

      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strAlcoholic,
            strDrinkThumb,
            strGlass,
            strInstructions,
            strCategory,
          } = item
          // we create an object having more concise names of the above
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            instruction: strInstructions,
            category: strCategory,
          }
        })
        setCocktails(newCocktails)
        setLoading(false)
      } else {
        // else if the search term is not matched
        //  we do this line below we get 'No Cocktail Like That In The Bar' on the screen
        setCocktails([])
      }
      setLoading(false)
      // console.log(data)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])
  return (
    <AppContext.Provider
      value={{ loading, searchTerm, setSearchTerm, cocktails }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
