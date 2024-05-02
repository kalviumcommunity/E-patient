import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { StaticDatePicker } from '@mui/x-date-pickers'
import Badge from '@mui/material/Badge';
import CheckIcon from '@mui/icons-material/Check';
import { LocalizationProvider } from '@mui/x-date-pickers'

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="portrait"
        openTo="day"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        textField={(params) => <TextField {...params} />}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) >= 0;

          return (
            <Badge
              key={day.toString()}
              overlap="circular"
              badgeContent={isSelected ? <CheckIcon color="error" /> : null}
            >
              <DayComponentProps.dateTypography component="div">
                {day.getDate()}
              </DayComponentProps.dateTypography>
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
