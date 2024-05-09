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

const Form = ({ visibility }) => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: '',
        email: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 
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
                <select
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value=''>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
                <input
                    className='data'
                    type='number'
                    name='age'
                    placeholder='Age'
                    value={formData.age}
                    onChange={handleChange}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
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
