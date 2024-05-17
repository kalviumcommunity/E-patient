import React, { useEffect, useState } from 'react';

function Doclist() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/doctors'); 
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className='doctors'>
      <h1>Doctors</h1>
      <div className='doctors-list'>
        {doctors.map((doctor) => (
          <div key={doctor._id} className='doctor-profile'>
            <img src={doctor.Pic} alt={doctor.Name} />
            <h2>{doctor.Name}</h2>
            <p>Branch: {doctor.Branch}</p>
            <p>Hospital: {doctor.Hospital}</p>
            <p>Experience: {doctor.Experience} years</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doclist;
