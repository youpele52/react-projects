import React, { useState, useEffect } from 'react'
import List from './List'
// import List2 from './List_copy'
import Alert from './Alert'

// we use this func to make sure our list stays in the localStorage
const getLocalStorage = () => {
  // getItem is looking for an item in our local storage called 'list'
  let list = localStorage.getItem('list')
  // if list does exist in our localStorage it will be truthy else it will be falsy
  if (list) {
    // parse the string, constructing a JS script value from the json
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  // used when we will be editing an item on our grocery list
  const [editID, setEditID] = useState(null)
  // alert to specify what we are doing with the item

  // type: success or danger just like in bootstrap
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  // creating a function that handles the changing in the alert
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  // emptying the list
  const clearList = () => {
    showAlert(true, 'Empty list', 'danger')
    setList([])
  }

  // removing one item from the list
  const removeItem = (id) => {
    // if the item id matches the id passed in the args, it will filter out that item
    // keeping only the items that do not match that id
    setList(list.filter((item) => item.id !== id))

    list.map((item) => {
      if (item.id === id) {
        showAlert(true, `${item.title} removed from the list`, 'danger')
      }
    })
  }

  // editing one item
  const editItem = (id) => {
    // if the id matches then return only that item
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  // when we hit submit
  const handleSubmit = (e) => {
    e.preventDefault()
    // empty string '' is a falsy
    // if name is falsy :
    // we display alert
    if (!name) {
      // check for before we do editing
      // else if name and editing is truthy
      // setAlert({ show: true, msg: 'Please enter value', type: 'danger' })
      showAlert(true, 'Please enter value', 'danger')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name } //name is the new title or the new name state value after editing
          }
          return item
        })
      )
      // after editing reseting
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'Saved changes', 'success')
      // else we do our adding to the list
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      // instead of ${newItem.title} you can use name if you choose to
      showAlert(true, `${newItem.title} added to the list`, 'success')
      setList([...list, newItem])
      // after adding the new item to the list we set name back to ''
      // we do this to clear the input so that the user can enter new item if he/she chooses
      setName('')
    }
  }

  // saving our entered data on the local storage
  useEffect(() => {
    // the key name is list, we keep up with that
    // we can only store our data as a string thus we use stringify
    localStorage.setItem('list', JSON.stringify(list))
    // changes to the local storage is only implemented when our list is changed
  }, [list])

  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {/* if alert.show state value is true, then we display the Alert component */}
        {/* we pass in the state values of alert unto Alert.js */}
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery List</h3>
        <div className='form-control'>
          <input
            type='text'
            name=''
            id=''
            className='grocery'
            placeholder='e.g.  oatmeal'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* This button is conditional */}
          <button className='submit-btn' type='submit'>
            {isEditing ? 'edit' : 'add'}
          </button>
        </div>
      </form>
      {/* here we use conditional rendering, so the button clear items and List componenet 
      only appears if list length > 0*/}
      {list.length > 0 && (
        <div className='grocery-container'>
          {/* passing the content of the list to List.js */}
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
