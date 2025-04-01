import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './signUp.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_y2pix7k', // Paste your Service ID here
        'template_vy3d4ee', // Paste your Template ID here
        {
          to_email: 'biundo@bc.edu',
          from_email: email,
          message: `New PoliTalk signup from: ${email}`,
        },
        'RGSCOtCpgIJ5W9TS6' // Paste your Public Key here
      );

      alert('Thank you for signing up!');
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error);
      alert('There was an error signing up. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <motion.div
        className="signup-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Join PoliTalk</h1>
        <p className="subtitle">Be part of the democratic process</p>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <button 
            type="submit" 
            className="signup-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : 'Join the Waitlist'}
          </button>
        </form>

        <button 
          className="back-button"
          onClick={() => navigate('/')}
          disabled={isSubmitting}
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
}
