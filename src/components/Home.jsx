import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-section"
      >
        <h1>PoliTalk</h1>
        <p className="subtitle">Returning Power to the People</p>
        
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Democracy Revolution
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="features-grid"
      >
        <div className="feature-card">
          <h3>Track</h3>
          <p>Stay informed about bills in your state legislature with AI-powered summaries</p>
        </div>
        <div className="feature-card">
          <h3>Vote</h3>
          <p>Easily indicate your support or opposition to bills with a simple swipe</p>
        </div>
        <div className="feature-card">
          <h3>Impact</h3>
          <p>Instantly contact your representatives and track their voting alignment with your views</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Home 