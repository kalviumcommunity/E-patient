import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

function Open({ handleSignOut }) {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState('none');

  const toggleVisibility = () => {
    setVisibility(visibility === 'none' ? 'flex' : 'none');
  };

  const handleDoctorsClick = () => {
    navigate('/doctors');
  };
  const handlePrescription = () => {
    navigate('/upload');
  };
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
}

  return (
    <div className='main'>
      <img src="../src/assets/backimg.jpg" alt="background" className='background'/>
      <div className='nav'>
        <div className='logo-img'>
          <img src='../src/assets/logo.png' alt='Logo' />
          <p>E-patient</p>
        </div>
        <div className='options'>
          <ul className='list'>
            <li onClick={handleDoctorsClick}>Doctors</li>
            <li onClick={handlePrescription}>Prescription</li>
            <li>Profile</li>
          </ul>
          <div>
            <button onClick={toggleVisibility} className='appoint'>
              Book Appointment
            </button>
          </div>
          <br/>
          <div>
          <button onClick={logout}>Logout</button>
          </div>
          <Form visibility={visibility} />
        </div>
      </div>
      {/* <button onClick={logout}>Logout</button> */}
      {/* <div className='Doclist'>
        <div className='docbox' onClick={handleDoctorsClick}>
          Cardiologist
        </div>
        <div className='docbox' onClick={handleDoctorsClick}>
          Psychiatrist
        </div>
        <div className='docbox' onClick={handleDoctorsClick}>
          Orthopedic
        </div>
        <div className='docbox' onClick={handleDoctorsClick}>
          Urologist
        </div>
        <div className='docbox' onClick={handleDoctorsClick}>
          General
        </div>
      </div> */}
    </div>
  );
}

export default Open;
