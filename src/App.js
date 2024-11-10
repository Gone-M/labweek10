import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    termsAccepted: false
  });

  // State to store the submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // List of Canadian Provinces
  const provinces = [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick",
    "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia",
    "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.termsAccepted) {
      setSubmittedData(formData); 
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit} className="data-entry-form">
        {/* First Row */}
        <div className="form-row">
          <label>Email:</label>
          <input type="email" placeholder="Enter Email" name="email" onChange={handleChange} required />

          <label>Full Name:</label>
          <input type="text" name="fullName" placeholder='Full Name' onChange={handleChange} required />
        </div>

        {}
        <div className="form-row">
          <label>Address:</label>
          <input type="text" name="address" placeholder='1234 Main St' onChange={handleChange} required />
        </div>

        {}
        <div className="form-row">
          <label>Address 2:</label>
          <input type="text" name="address2" placeholder='Apartment, studio, or floor (optional)' onChange={handleChange} />
        </div>

        {}
        <div className="form-row">
          <label>City:</label>
          <input type="text" name="city" onChange={handleChange} required />

          <label>Province:</label>
          <select name="province" onChange={handleChange} value={formData.province} required>
            <option value="">Select a province</option>
            {provinces.map((province, index) => (
              <option key={index} value={province}>
                {province}
              </option>
            ))}
          </select>

          <label>Postal Code:</label>
          <input type="text" name="postalCode" onChange={handleChange} required />
        </div>

        {}
        <div className="form-row terms">
          <input type="checkbox" name="termsAccepted" onChange={handleChange} required />
          <label>I agree to the terms and conditions</label>
        </div>

        {}
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {}
      {submittedData && (
        <div className="submitted-info">
          <p><span className="label">Email:</span> {submittedData.email}</p>
          <p><span className="label">Full Name:</span> {submittedData.fullName}</p>
          <p><span className="label">Address:</span> {submittedData.address}</p>
          <p><span className="label">Address 2:</span> {submittedData.address2}</p>
          <p><span className="label">City:</span> {submittedData.city}</p>
          <p><span className="label">Province:</span> {submittedData.province}</p>
          <p><span className="label">Postal Code:</span> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
