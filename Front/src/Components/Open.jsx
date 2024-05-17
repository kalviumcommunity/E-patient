import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

function Open() {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState('none');

  const toggleVisibility = () => {
    setVisibility(visibility === 'none' ? 'flex' : 'none');
  };

  const handleDoctorsClick = () => {
    navigate('/doctors');
  };

  return (
    <div className='main'>
      <div className='nav'>
        <div className='logo-img'>
          <img src='../src/assets/logo.png' alt='Logo' />
          <p>E-patient</p>
        </div>
        <div className='options'>
          <ul className='list'>
            <li onClick={handleDoctorsClick}>Doctors</li>
            <li>Prescription</li>
            <li>Profile</li>
          </ul>
          <div>
            <button onClick={toggleVisibility} className='appoint'>
              Book Appointment
            </button>
          </div>
          <Form visibility={visibility} />
        </div>
      </div>
    </div>
  );
}

export default Open;

