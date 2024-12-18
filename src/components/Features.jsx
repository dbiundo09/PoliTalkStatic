import { motion } from 'framer-motion'

function Features() {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="about-page"
      >
        <div className="about-content">
          <section className="about-section overview">
            <h2>Overview</h2>
            <p>PoliTalk is a revolutionary mobile application empowering voters with AI-powered analysis of state and local legislative bills, enabling direct civic engagement and democratic participation.</p>
          </section>

          <section className="about-section problem">
            <h2>The Challenge</h2>
            <div className="problem-grid">
              <div className="problem-card">
                <h3>Democratic Disconnect</h3>
                <p>In our representative democracy, elected officials are meant to represent their constituents' views. However, growing populations and special interest influence have created a disconnect between representatives and voters.</p>
              </div>
              <div className="problem-card">
                <h3>Limited Accountability</h3>
                <p>Representatives were never meant to be held accountable only during elections. True democracy requires ongoing dialogue between constituents and officeholders.</p>
              </div>
              <div className="problem-card">
                <h3>State-Level Opacity</h3>
                <p>At the state and local level, hundreds of bills pass through legislatures yearly with minimal voter input, creating a significant gap in democratic participation.</p>
              </div>
            </div>
          </section>

          <section className="about-section solution">
            <h2>Our Solution</h2>
            <div className="solution-features">
              <div className="solution-feature">
                <h3>AI-Powered Bill Tracking</h3>
                <p>Track and receive digestible summaries of bills moving through your state and local legislatures, powered by advanced AI technology.</p>
              </div>
              <div className="solution-feature">
                <h3>Simple Engagement</h3>
                <p>Express your support or opposition to bills with an intuitive swipe interface, and easily communicate your stance through automated emails or direct calls.</p>
              </div>
              <div className="solution-feature">
                <h3>Representative Accountability</h3>
                <p>Monitor how well your representative's votes align with your preferences through our innovative agreement tracking system.</p>
              </div>
            </div>
          </section>

          <section className="about-section vision">
            <h2>Our Vision</h2>
            <p>We believe in a democracy where every citizen has the tools to effectively participate in the legislative process. PoliTalk bridges the gap between voters and their representatives, making civic engagement accessible, efficient, and impactful.</p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}

export default Features 