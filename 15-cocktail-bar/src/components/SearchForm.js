import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  // useGlobalContext conntains {{ loading, searchTerm, setSearchTerm, cocktails }}
  // here we only de strcuture what we need to use in this component
  const { setSearchTerm } = useGlobalContext()
  // uncontrolled input we use useRef
  const searchValue = React.useRef()

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favourite cocktail</label>
          {/* note that the label attribute htmlFor has to match the input attriubute name */}
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
          {/* the goal here is anytime the user type sth in the input we will invoke the setSearchTerm
           which in turn will invoke the useEffect in context.js . 
           Because we set that useEffect to be dependent on searchTerm */}
        </div>
      </form>
    </section>
  )
}

export default SearchForm
