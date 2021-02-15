import React, { useState } from 'react'
import Menu from './Menu' //this displays the list
import Categories from './Categories' //displays the button
import items from './data' //this is an array of the data

// using Set will get us only unique values, if there are three breakfast, instead returning all three it will return one
// this returns a list containing, 'all' and every unique category
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  //  list of 'all' and every unique category will be our value here
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    // filtering based on the original items list coming from the data.js and not the useState menuItems,
    // even though they both contain same thing
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        {/* passing the  filterItems unto Categories.js */}
        <Categories filterItems={filterItems} categories={categories} />
        {/* passing in our menuItems unto the file Menu.js */}
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
