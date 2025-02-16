import { useState } from 'react';
import { FaFileAlt, FaGavel, FaArrowLeft } from 'react-icons/fa';

function Admin() {
  const [formData, setFormData] = useState({
    billId: '',
    billName: '',
    billSummary: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL;
    
    try {
      const response = await fetch(`${apiUrl}/submit-bill`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Bill submitted successfully!');
        setFormData({ billId: '', billName: '', billSummary: '' });
      } else {
        alert('Failed to submit bill');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting bill');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="admin-page">
      <a href="/" className="back-button">
        <FaArrowLeft /> Back to Home
      </a>
      <div className="admin-container">
        <div className="admin-header">
          <FaGavel className="gavel-icon" />
          <h2>Submit New Bill</h2>
        </div>
        <form onSubmit={handleSubmit} className="bill-form">
          <div className="form-group">
            <label htmlFor="billId">
              <FaFileAlt className="input-icon" /> Bill ID
            </label>
            <input
              type="text"
              id="billId"
              name="billId"
              value={formData.billId}
              onChange={handleChange}
              placeholder="Enter Bill ID"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="billName">
              <FaFileAlt className="input-icon" /> Bill Name
            </label>
            <input
              type="text"
              id="billName"
              name="billName"
              value={formData.billName}
              onChange={handleChange}
              placeholder="Enter Bill Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="billSummary">
              <FaFileAlt className="input-icon" /> Bill Summary
            </label>
            <textarea
              id="billSummary"
              name="billSummary"
              value={formData.billSummary}
              onChange={handleChange}
              placeholder="Enter Bill Summary"
              required
              rows="6"
            />
          </div>

          <button type="submit">Submit Bill</button>
        </form>
      </div>
    </div>
  );
}

export default Admin; 