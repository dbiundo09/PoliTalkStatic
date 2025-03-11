import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Bill from './Bill/Bill';
import './BillSwiper.css';
import getBills from '../../api/getBills';
import { useEffect } from 'react';

// TODO: Remove this
const sampleBills = [
  {
    id: '1',
    name: 'H.R. 123 - Clean Energy Act',
    summary: 'A bill to promote renewable energy development and reduce carbon emissions through incentives and infrastructure investments.',
    details: 'This comprehensive legislation aims to accelerate the transition to clean energy by providing tax incentives for renewable energy projects, funding for grid modernization, and establishing new emissions standards for power plants.'
  },
  {
    id: '2',
    name: 'S. 456 - Education Reform Act',
    summary: 'A bill to improve public education through increased funding and modernization of learning resources.',
    details: 'This bill provides additional funding for public schools, reduces student loan burden, and implements new standards for digital learning resources.'
  },
  {
    id: '3',
    name: 'H.R. 789 - Healthcare Access Act',
    summary: 'A bill to expand healthcare access and reduce prescription drug costs.',
    details: 'This legislation aims to make healthcare more affordable by implementing price controls on prescription drugs and expanding Medicare coverage.'
  }
];

export default function BillSwiper() {
  const navigate = useNavigate();
  const [bills, setBills] = useState(sampleBills);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    getBills().then(bills => {
      setBills(bills);
      console.log(bills);
    });
  }, []);

  const handleVote = (approved) => {
    setShowStats(true);
    setTimeout(() => {
      setShowStats(false);
      if (currentIndex < bills.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsFinished(true);
      }
    }, 2000);
  };

  const handleStartOver = () => {
    setCurrentIndex(0);
    setIsFinished(false);
  };

  const currentBill = bills[currentIndex];

  return (
    <div className="bill-swiper-container">
      <button 
        className="home-button"
        onClick={() => {
          navigate('/');
          window.location.reload();
        }}
        aria-label="Return to home"
      >
        Home
      </button>
      <motion.div
        className="bill-card-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {!isFinished ? (
          <>
            <button
              className="vote-button dismiss"
              onClick={() => handleVote(false)}
              aria-label="Dismiss bill"
            >
              NO
            </button>
            {true &&
              <div>
                <h1>Current Bills</h1>
                <p className="bill-count">Bill {currentIndex + 1} of {bills.length}</p>
                <div>
                  {!showStats ? (<div className="bill-content-wrapper">
                    <div>
                      <Bill bill={currentBill} />
                    </div>
                  </div>) : (<div style={{ width: 500 }}></div>)}
                </div>
              </div>}
            <button
              className="vote-button approve"
              onClick={() => handleVote(true)}
              aria-label="Approve bill"
            >
              YES
            </button>
          </>
        ) : (
          <motion.div 
            className="end-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>You've Reviewed All Bills!</h1>
            <p>Thank you for participating in the democratic process.</p>
            <button 
              className="start-over-button"
              onClick={handleStartOver}
            >
              Start Over
            </button>
          </motion.div>
        )}
        {showStats && (
          <motion.div
            className="voting-stats-overlay"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2>How Others Voted</h2>
            <div className="stats-container">
              <div className="stat approve">
                <span className="label">YES</span>
                <span className="value">58%</span>
              </div>
              <div className="stat dismiss">
                <span className="label">NO</span>
                <span className="value">42%</span>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
} 