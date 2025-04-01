import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import './WaitlistModal.css'

function WaitlistModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const modalRef = useRef()

  // Handle click outside modal
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      console.log('Signing up:', email)
      onClose()
    } catch (error) {
      console.error('Error signing up:', error)
    }
    
    setIsSubmitting(false)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Join the Movement</h2>
        <p>Sign up to be notified when PoliTalk launches!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default WaitlistModal 