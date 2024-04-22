import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
    Age: "",
    Gender: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/signup", formData);

    } catch (error) {
      console.error("Failed to create user:", error);

    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Username" placeholder="Username" value={formData.Username} onChange={handleChange} />
        <input type="email" name="Email" placeholder="Email" value={formData.Email} onChange={handleChange} />
        <input type="password" name="Password" placeholder="Password" value={formData.Password} onChange={handleChange} />
        <input type="number" name="Age" placeholder="Age" value={formData.Age} onChange={handleChange} />
        <select name="Gender" value={formData.Gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
