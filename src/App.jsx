import { useState } from 'react'
import './styles/global.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Features from './components/Features/Features'
import Contact from './components/Contact/Contact'
import Admin from './components/Admin/Admin'
import TestApp from './components/TestApp/TestApp'
import BillSwiper from './components/BillSwiper/BillSwiper'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <Router>
      <div className="app-container">
        {!['/admin', '/bills'].includes(window.location.pathname) && (
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        {!['/admin', '/bills'].includes(window.location.pathname) && (
          <div className="patriotic-divider" />
        )}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/test-it-out" element={<TestApp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/bills" element={<BillSwiper />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
