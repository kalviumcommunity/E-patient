import React, { useState } from 'react';
import dayjs from 'dayjs';
import './Form.css';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import axios from "axios";


const Form = ({ visibility }) => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: '',
        email: '',
        doctor: '',
        dateOfBirth: dayjs(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setFormData((prevData) => ({
            ...prevData,
            dateOfBirth: date,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); 
        try {
            await axios.post("http://localhost:8080/api/create-appointment", formData);
            console.log("posted successfully!!");
          } catch (error) {
            console.error("Failed to create user:", error);
            setErrorMessage("Failed to create user. Please try again later.");
          }
    };

    
    return (
        <div style={{ display: visibility }} className='check'> 
            
            <form onSubmit={handleSubmit} className='form'>
            <div className='head'>Book your slot</div>
                <input 
                    className='data'
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <input 
                    className='data'
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                
                <input
                    className='data'
                    type='number'
                    name='age'
                    placeholder='Age'
                    value={formData.age}
                    onChange={handleChange}
                />
                <select
                className='data'
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value=''>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
                <select
                className='data'
                    name='doctor'
                    value={formData.doctor}
                    onChange={handleChange}
                >
                    <option value=''>Select Doctor</option>
                    <option value='doc1'>doc1</option>
                    <option value='doc2'>doc2</option>
                    <option value='doc3'>doc3</option>
                </select>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer className='data'
                        components={[
                            'MobileDatePicker',
                            'DesktopTimePicker',
                            'StaticTimePicker',
                        ]}
                    >
                        <DemoItem>
                            <MobileDatePicker/>
                        </DemoItem>
                        <DemoItem>
                            <DesktopTimePicker
                                defaultValue={dayjs('2022-04-17T15:30')}
                            />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
                <button type='submit' className='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
