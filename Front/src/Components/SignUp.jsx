import React, { useState } from "react";
import axios from "axios";
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function SignUp() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
    Age: "",
    Gender: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Username.length < 3) {
      setErrorMessage("Username must be at least 3 characters long.");
      return;
    }

    if (formData.Password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.Email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/signup", formData);
      setSuccessMessage("User created successfully!");
      setFormData({
        Username: "",
        Email: "",
        Password: "",
        Age: "",
        Gender: ""
      });
      history.push("/open");
    } catch (error) {
      console.error("Failed to create user:", error);
      setErrorMessage("Failed to create user. Please try again later.");
    }
  };

  return (
    <div className="doc">
    <div className="container">
      <h2>Sign Up</h2>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" name="Username" placeholder="Username" value={formData.Username} onChange={handleChange} className="input-field" />
        <input type="email" name="Email" placeholder="Email" value={formData.Email} onChange={handleChange} className="input-field" />
        <input type="password" name="Password" placeholder="Password" value={formData.Password} onChange={handleChange} className="input-field" />
        <input type="number" name="Age" placeholder="Age" value={formData.Age} onChange={handleChange} className="input-field" />
        <select name="Gender" value={formData.Gender} onChange={handleChange} className="input-field">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
    <div className="side"></div>
    </div>
  );
}

export default SignUp;
