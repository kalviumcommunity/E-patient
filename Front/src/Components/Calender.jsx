import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleTimeSelection = time => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      console.log('Booking slot:', selectedDate, selectedTime);
    } else {
      alert('Please select both date and time.');
    }
  };

  return (
    <div className="calendar">
      <h2>Book Appointment</h2>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          minDate={new Date()}
          placeholderText="Select a date"
        />
      </div>
      {selectedDate && (
        <div className="time-slots">
          <h3>Select a Time Slot</h3>

            <button onClick={() => handleTimeSelection('09:00 AM')}>09:00 AM</button>
            <button onClick={() => handleTimeSelection('10:00 AM')}>10:00 AM</button>
            <button onClick={() => handleTimeSelection('11:00 AM')}>11:00 AM</button>

        </div>
      )}
      <button onClick={handleBooking}>Book Appointment</button>
    </div>
  );
};

export default Calendar;
