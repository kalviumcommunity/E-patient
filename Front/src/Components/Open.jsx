import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import Form from './Form';

function Open({ userEmail }) {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState('none');
  const [email, setEmail] = useState(userEmail || '');

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const userEmail = result.user.email;
            setEmail(userEmail);
            const token = result.user.accessToken;
            localStorage.setItem("email", userEmail);
            localStorage.setItem("token", token);
        })
        .catch((error) => {
            console.error("Error during sign-in:", error);
        });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedToken = localStorage.getItem('token');
    if (storedEmail && storedToken) {
      setEmail(storedEmail);
    }
  }, []);

  const toggleVisibility = () => {
    setVisibility(visibility === 'none' ? 'flex' : 'none');
  };

  const handleDoctorsClick = () => {
    navigate('/doctors');
  };

  const handlePrescription = () => {
    navigate('/upload');
  };

  const logout = () => {
    localStorage.clear();
    setEmail('');
    window.location.reload();
  };

  return (
    <div className='main'>
      <img src="../src/assets/backimg.jpg" alt="background" className='background' />
      <div className='nav'>
        <div className='logo-img'>
          <img src='../src/assets/logo.png' alt='Logo' />
          <p>E-patient</p>
        </div>
        <div className='options'>
          {email ? (
            <>
              <ul className='list'>
                <li onClick={handleDoctorsClick}>Doctors</li>
                <li onClick={handlePrescription}>Prescription</li>
                <li>Profile</li>
              </ul>
              <div>
                <button onClick={toggleVisibility} className='appoint'>
                  Book Appointment
                </button>
                <button onClick={handleSignIn}>Sign in with Google</button>
              </div>
              <br />
              <div>
                <button onClick={logout}>Logout</button>
              </div>
              <Form visibility={visibility} />
            </>
          ) : (
            <button onClick={handleSignIn}>Sign in with Google</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Open;
