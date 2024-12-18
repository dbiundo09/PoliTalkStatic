import { motion } from 'framer-motion'

function Features() {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="features-page"
      >
        <h2>How It Works</h2>
        <div className="features-content">
          <div className="feature-section">
            <h3>AI-Powered Bill Analysis</h3>
            <p>Our advanced AI technology tracks and summarizes bills moving through state and local legislatures, making complex legislation easy to understand.</p>
          </div>
          
          <div className="feature-section">
            <h3>Simple UI</h3>
            <p>Express your opinion on bills with a simple swipe left or right - democracy has never been more accessible.</p>
          </div>
          
          <div className="feature-section">
            <h3>Direct Representative Contact</h3>
            <p>Automatically generate emails or make direct calls to your representatives' offices with just a tap.</p>
          </div>
          
          <div className="feature-section">
            <h3>Representative Accountability</h3>
            <p>Track how well your representatives' votes align with your preferences over time with our agreement scoring system.</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Features 