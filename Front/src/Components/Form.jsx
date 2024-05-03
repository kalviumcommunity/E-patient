import React, { useState } from 'react';

function Form() {
    const [doctor, setDoctor] = useState('');
    const [patientName, setPatientName] = useState('');
    const [timing, setTiming] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ doctor, patientName, timing }),
            });
            if (response.ok) {
                // Handle success, e.g., show a success message
                console.log('Form submitted successfully!');
            } else {
                // Handle error, e.g., show an error message
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="doctor">Choose a Doctor:</label>
                <select id="doctor" value={doctor} onChange={(e) => setDoctor(e.target.value)}>
                    <option value="">Select Doctor</option>
                    <option value="Dr. Smith">Dr. Smith</option>
                    <option value="Dr. Johnson">Dr. Johnson</option>
                    <option value="Dr. Garcia">Dr. Garcia</option>
                    {/* Add more doctors here if needed */}
                </select><br/><br/>
                
                <label htmlFor="patientName">Your Name:</label>
                <input type="text" id="patientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} /><br/><br/>
                
                <label htmlFor="timing">Preferred Timing:</label>
                <select id="timing" value={timing} onChange={(e) => setTiming(e.target.value)}>
                    <option value="">Select Timing</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    {/* Add more timing options here if needed */}
                </select><br/><br/>
                
                <input type="submit" value="Book Appointment" />
            </form>
        </div>
    );
}

export default Form;
