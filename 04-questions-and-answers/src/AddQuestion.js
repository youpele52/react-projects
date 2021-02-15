import React, { useState } from 'react'

const AddQuestion = ({ questions, addNewQuestion }) => {
  const [newQuestion, setNewQuestion] = useState(false)

  const title = () => document.getElementById('title').value
  const info = () => document.getElementById('info').value
  // const getFormValues = () => {
  // const title = document.getElementById('title').value
  // const info = document.getElementById('info').value
  //   alert(title)
  //   return [title, info]
  // }
  // console.log(newQuesttion)
  return (
    <main>
      <button className='btn2' onClick={() => setNewQuestion(!newQuestion)}>
        Add New Question
      </button>
      <br />
      <section>
        {newQuestion ? (
          <section className='question'>
            <form action=''>
              <label htmlFor='title' for='title'>
                Title
              </label>
              <input type='text' id='title' name='title' /> <br />
              <label htmlFor='info' for='info'>
                Info
              </label>
              <input type='text' id='info' name='info' />
              <button
                className='btn'
                // type='submit'
                onClick={() => addNewQuestion({ title, info })}
              >
                Submit
              </button>
            </form>
          </section>
        ) : (
          ''
        )}
      </section>
    </main>
  )
}

export default AddQuestion
