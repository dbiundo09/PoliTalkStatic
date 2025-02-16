import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Contact from './components/Contact'
import Admin from './components/Admin'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  // Simple check for admin route - you might want to implement proper authentication
  const isAdminRoute = window.location.pathname === '/admin';

  if (isAdminRoute) {
    return <Admin />;
  }

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="patriotic-divider" />
      
      <main className="main-content">
        {activeTab === 'home' && <Home />}
        {activeTab === 'features' && <Features />}
        {activeTab === 'contact' && <Contact />}
      </main>
    </div>
  )
}

export default App
