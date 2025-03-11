import { useState, useEffect } from 'react';
import { FaFileAlt, FaGavel, FaArrowLeft, FaTrash, FaPlus, FaList } from 'react-icons/fa';
import getBills from '../../api/getBills';
import './Admin.css'

function Admin() {
  const [activeTab, setActiveTab] = useState('add'); // 'add' or 'view'
  const [bills, setBills] = useState([]);
  const [formData, setFormData] = useState({
    billName: '',
    billSummary: '',
    billDetails: ''
  });


  const loadBills = async () => {
    const fetchedBills = await getBills();
    setBills(fetchedBills);
  };

  useEffect(() => {
    loadBills();
  }, []);

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
        setFormData({ billName: '', billSummary: '', billDetails: '' });
        loadBills(); // Refresh the bills list
      } else {
        alert('Failed to submit bill');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting bill');
    }
  };

  const handleDelete = async (id) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    
    if (window.confirm('Are you sure you want to delete this bill?')) {
      try {
        const response = await fetch(`${apiUrl}/bills/deleteBill/${id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          alert('Bill deleted successfully!');
          loadBills(); // Refresh the bills list
        } else {
          alert('Failed to delete bill');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error deleting bill');
      }
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
    <div className="admin-page" onClick={() => console.log(bills)}>
      <a href="/" className="back-button">
        <FaArrowLeft /> Back to Home
      </a>
      <div className="admin-container">
        <div className="admin-header">
          <FaGavel className="gavel-icon" />
          <h2>Bill Administration</h2>
        </div>

        <div className="tabs">
          <button 
            className={`tab-button ${activeTab === 'add' ? 'active' : ''}`}
            onClick={() => setActiveTab('add')}
          >
            <FaPlus /> Add Bill
          </button>
          <button 
            className={`tab-button ${activeTab === 'view' ? 'active' : ''}`}
            onClick={() => setActiveTab('view')}
          >
            <FaList /> View Bills
          </button>
        </div>

        {activeTab === 'add' ? (
          <form onSubmit={handleSubmit} className="bill-form">
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
                placeholder="Enter a brief summary of the bill"
                required
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="billDetails">
                <FaFileAlt className="input-icon" /> Bill Details
              </label>
              <textarea
                id="billDetails"
                name="billDetails"
                value={formData.billDetails}
                onChange={handleChange}
                placeholder="Enter detailed description of the bill"
                required
                rows="6"
              />
            </div>

            <button type="submit">Submit Bill</button>
          </form>
        ) : (
          <div className="bills-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Summary</th>
                  <th>Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bills.map(bill => (
                  <tr key={bill.id}>
                    <td>{bill.name}</td>
                    <td>{bill.summary}</td>
                    <td>{bill.details}</td>
                    <td>
                      <button 
                        className="delete-button"
                        onClick={() => handleDelete(bill.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin; 