import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    terms: false,
  });
  const [submittedData, setSubmittedData] = useState(null); // State for displaying submitted data

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Set the submitted data to display below the form
  };

  return (
    <div className="form-container">
      <form className="data-entry-form" onSubmit={handleSubmit}>
        <h1>Data Entry Form</h1>

        <div className="inline-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" required />
          
          <label>Full Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
        </div>

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="1234 Main St" required />

        <label>Address 2:</label>
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder="Apartment, studio, or floor" />

        <div className="inline-group">
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />

          <label>Province:</label>
          <select name="province" value={formData.province} onChange={handleChange} required>
            <option value="">Choose...</option>
            <option value="Ontario">Ontario</option>
            <option value="Quebec">Quebec</option>
            {/* Add other provinces as needed */}
          </select>
        </div>

        <label>Postal Code:</label>
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Postal Code" required />

        <div className="terms">
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
          <label>I agree to the terms and conditions</label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information</h2>
          <p><strong style={{ color: 'green' }}>Email:</strong> {submittedData.email}</p>
          <p><strong style={{ color: 'green' }}>Full Name:</strong> {submittedData.name}</p>
          <p><strong style={{ color: 'green' }}>Address:</strong> {submittedData.address}</p>
          <p><strong style={{ color: 'green' }}>Address 2:</strong> {submittedData.address2}</p>
          <p><strong style={{ color: 'green' }}>City:</strong> {submittedData.city}</p>
          <p><strong style={{ color: 'green' }}>Province:</strong> {submittedData.province}</p>
          <p><strong style={{ color: 'green' }}>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
