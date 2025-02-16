import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Contact from './components/Contact'

function App() {
  // const [activeTab, setActiveTab] = useState('home')
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setBackendData(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>My React App</h1>
      {backendData && <p>Message from backend: {backendData}</p>}
    </div>
  );

  // return (
  //   <div className="app-container">
  //     <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
  //     <div className="patriotic-divider" />
      
  //     <main className="main-content">
  //       {activeTab === 'home' && <Home />}
  //       {activeTab === 'features' && <Features />}
  //       {activeTab === 'contact' && <Contact />}
  //     </main>
  //   </div>
  // )
}

export default App
