import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Contact from './components/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('home')

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
