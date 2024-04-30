import React from 'react'

function Open() {
  return (
    <div className='main'>
      <div className='nav'>
           <div className='logo-img'>
                <img src='../src/assets/logo.png'  alt='Logo'/>
                <p>E-patient</p>
           </div>
           <div className='options'>
              <ul className='list'>
                  <li>Doctors</li>
                  <li>Prescription</li>
                  <li>Profile</li>
              </ul>
              <div>
                  <button>Book Appointment</button>
              </div>
           </div>
      </div>
      <div className='poster'>
      <img src='../src/assets/back.jpg'  alt='doc-patient' className='doc-patient' />

      </div>
    </div>
  )
}

export default Open
