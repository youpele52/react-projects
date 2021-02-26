import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }    `}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        <img
          src='https://media-exp1.licdn.com/dms/image/C4D03AQHx8V6oD5HHEg/profile-displayphoto-shrink_200_200/0/1534074844642?e=1619049600&v=beta&t=vZFvyo6MO530PgKKTetDB8G7_VdopQS9561Q-wtJEY4'
          alt='Youpele'
        />
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
