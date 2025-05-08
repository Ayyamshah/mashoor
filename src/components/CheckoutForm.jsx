import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import 'react-phone-input-2/lib/bootstrap.css';

const CheckoutForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    street: '',
    landmark: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    paymentMethod: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // 👈 Toggle state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.phone || form.phone.length < 8) newErrors.phone = 'Valid phone number is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.password) newErrors.password = 'Password is required';
    if (!form.street) newErrors.street = 'Street address is required';
    if (!form.city) newErrors.city = 'City is required';
    if (!form.state) newErrors.state = 'State is required';
    if (!form.zip) newErrors.zip = 'ZIP code is required';
    if (!form.country) newErrors.country = 'Country is required';
    if (!form.paymentMethod) newErrors.paymentMethod = 'Please select a payment method';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', form);
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="border p-3 rounded-3 shadow-sm mx-auto bg-dark text-light" style={{ maxWidth: '600px' }}>
        <div className="text-center mb-3">
          <img src="/logo.svg" alt="Logo" style={{ width: '150px' }} />
        </div>
        <h3 className="text-center mb-4">Checkout Form</h3>

        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control bg-dark text-light" />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <PhoneInput
            country={'in'}
            value={form.phone}
            onChange={(phone) => setForm({ ...form, phone })}
            inputClass="form-control text-light bg-dark"
          />
          {errors.phone && <p className="text-danger">{errors.phone}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control bg-dark text-light" />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>

        {/* ✅ Show/Hide Password with toggle */}
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="form-control text-light bg-dark"
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>

        {/* Address Section */}
        <div className="mb-3">
          <label className="form-label">Street Address:</label>
          <input type="text" name="street" value={form.street} onChange={handleChange} className="form-control bg-dark text-light" placeholder="House No, Street, Area" />
          {errors.street && <p className="text-danger">{errors.street}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Landmark:</label>
          <input type="text" name="landmark" value={form.landmark} onChange={handleChange} className="form-control bg-dark text-light" placeholder="Nearby landmark (optional)" />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">City:</label>
            <input type="text" name="city" value={form.city} onChange={handleChange} className="form-control bg-dark text-light" />
            {errors.city && <p className="text-danger">{errors.city}</p>}
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">State:</label>
            <input type="text" name="state" value={form.state} onChange={handleChange} className="form-control bg-dark text-light" />
            {errors.state && <p className="text-danger">{errors.state}</p>}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">ZIP / Postal Code:</label>
            <input type="text" name="zip" value={form.zip} onChange={handleChange} className="form-control bg-dark text-light" />
            {errors.zip && <p className="text-danger">{errors.zip}</p>}
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Country:</label>
            <input type="text" name="country" value={form.country} onChange={handleChange} className="form-control bg-dark text-light" />
            {errors.country && <p className="text-danger">{errors.country}</p>}
          </div>
        </div>

        {/* Payment Section */}
        <div className="mb-3">
          <label className="form-label">Payment Method:</label>
          <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} className="form-select bg-dark text-light">
            <option value="">Select Payment Method</option>
            <option value="cash">Cash on Delivery</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
          </select>
          {errors.paymentMethod && <p className="text-danger">{errors.paymentMethod}</p>}
        </div>

        <Link to={'/OrderSuccessfull/'} className="btn text-light w-100" style={{ backgroundColor: 'rgba(78, 221, 221, 0.75)' }}>
          Submit
        </Link>
      </form>
    </div>
  );
};

export default CheckoutForm;
