import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import WaitlistModal from './WaitlistModal'
import { FaBalanceScale, FaUsers, FaMobileAlt, FaChartLine } from 'react-icons/fa'

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL
    fetch(`${apiUrl}/hello`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching message:', error))
  }, [])

  return (
    <div className="page-container">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-section"
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1>Returning Power to the People</h1>
            <p className="subtitle">
              Revolutionizing democracy through AI-powered civic engagement
            </p>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              Join the Movement
            </motion.button>
          </div>
          <div className="hero-image">
            <img src="/logo.png" alt="PoliTalk App" className="phone-mockup" />
          </div>
        </div>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mission-section"
      >
        <h2>Bridging the Gap Between Citizens and Government</h2>
        <div className="mission-grid">
          <div className="mission-card">
            <FaBalanceScale className="mission-icon" />
            <h3>Democracy Restored</h3>
            <p>Empowering citizens with the same tools as professional lobbyists</p>
          </div>
          <div className="mission-card">
            <FaUsers className="mission-icon" />
            <h3>Direct Impact</h3>
            <p>Make your voice heard on bills that matter to you</p>
          </div>
          <div className="mission-card">
            <FaMobileAlt className="mission-icon" />
            <h3>Seamless Experience</h3>
            <p>Simple, intuitive interface for civic engagement</p>
          </div>
          <div className="mission-card">
            <FaChartLine className="mission-icon" />
            <h3>Real Accountability</h3>
            <p>Track how well your representatives reflect your views</p>
          </div>
        </div>
      </motion.div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="process-section"
      >
        <h2>How It Works</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Track Bills</h3>
            <p>Receive AI-powered summaries of relevant legislation in your area</p>
            {/* <img src="/track-bills.gif" alt="Track Bills" className="step-image" /> */}
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Take Action</h3>
            <p>Swipe to show support or opposition, and instantly contact representatives</p>
            {/* <img src="/take-action.gif" alt="Take Action" className="step-image" /> */}
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Monitor Impact</h3>
            <p>Track how your representatives vote and their alignment with your views</p>
            {/* <img src="/monitor-impact.gif" alt="Monitor Impact" className="step-image" /> */}
          </div>
        </div>
      </motion.div>

      {message && <p>{message}</p>}

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Home 