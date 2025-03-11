import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar({ activeTab, setActiveTab }) {
  const navigate = useNavigate();

  const handleNavigation = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">PoliTalk</div>
      <div className="nav-links">
        <button 
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleNavigation('home', '/')}
        >
          Home
        </button>
        <button 
          className={`nav-item ${activeTab === 'features' ? 'active' : ''}`}
          onClick={() => handleNavigation('features', '/features')}
        >
          About Us
        </button>
        <button 
          className={`nav-item ${activeTab === 'test-it-out' ? 'active' : ''}`}
          onClick={() => handleNavigation('test-it-out', '/test-it-out')}
        >
          Test it Out
        </button>
        <button 
          className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavigation('contact', '/contact')}
        >
          Contact
        </button>
      </div>
    </nav>
  )
}

export default Navbar 