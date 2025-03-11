import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './TestApp.css';

function TestApp() {
  const [zipCode, setZipCode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidState, setIsValidState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Check if zipcode is in Massachusetts (starts with '01' or '02')
    setIsValidState(zipCode.startsWith('01') || zipCode.startsWith('02'));
  };

  const handleChange = (e) => {
    setZipCode(e.target.value);
  };

  if (!isSubmitted) {
    return (
      <div className="test-app-container">
        <motion.div 
          className="zip-form-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaMapMarkerAlt className="location-icon" />
          <h1>Welcome to PoliTalk</h1>
          <p>Please enter your zip code to get started.</p>
          <form onSubmit={handleSubmit} className="zip-form">
            <input
              type="text"
              value={zipCode}
              onChange={handleChange}
              placeholder="Enter your zip code"
              pattern="[0-9]{5}"
              maxLength="5"
              required
            />
            <button type="submit">Get Started</button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="test-app-container">
      <motion.div 
        className="result-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{isValidState ? 'Welcome!' : 'Sorry!'}</h2>
        <p>
          {isValidState 
            ? 'You are eligible to use PoliTalk! Our app is currently available in Massachusetts.'
            : 'PoliTalk is currently only available in Massachusetts. We\'re working on expanding to more states soon!'}
        </p>
        {isValidState && (
          <button className="enter-app-button" onClick={() => window.location.href = '/bills'}>
            Enter App
          </button>
        )}
        <button className="back-button" onClick={() => setIsSubmitted(false)}>
          Try Another Zip Code
        </button>
      </motion.div>
    </div>
  );
}

export default TestApp; 