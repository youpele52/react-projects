import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {
  // timed function
  useEffect(() => {
    const timeout = setTimeout(() => {
      // removeAlert  is the same thing as our showAlert in App.js
      // here we named it so because we will want it to disappear from the screen after a while hence the name removeAlert
      removeAlert()
    }, 2000)
    // cleaning up after display
    return () => clearTimeout(timeout)
    // since this timeout func depends on list, we set the useEffect to render only when
    // there is any change to the list
    // SOOOOOOOOO.... the removeAlert does not run and await for 2 secs before displaying another alert
    // but the it keeps displaying whatever is done to our list
    // whenever our list is being changed
  }, [list])

  // conditionally setting the className, to conditional change the CSS outlook of the item
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
