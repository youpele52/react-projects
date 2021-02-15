import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
import AddQuestion from './AddQuestion'

function App() {
  const [questions, setQuestions] = useState(data)
  const addNewQuestion = (title, info) => {
    const id = Math.floor(Math.random() * 1000000)
    // newQuestion = { id: id, title: title, info: info }
    questions.push({ id: id, title: title, info: info })
    setQuestions(questions)
    // questions.push(newQuestion)
  }

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>

        <section className='info'>
          {questions.map((question) => {
            //  {...question} passing all the elements in data as prop unto Question.js aka SingleQuestion
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
        <AddQuestion questions={questions} addNewQuestion={addNewQuestion} />
      </div>
    </main>
  )
}

export default App
