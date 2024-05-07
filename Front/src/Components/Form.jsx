import React from 'react';
import dayjs from 'dayjs';
// import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';

const form = () => {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'MobileDatePicker',
                        'DesktopTimePicker',
                        'StaticTimePicker',
                    ]}
                >
                <DemoItem>
                    <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                </DemoItem>
                <DemoItem label="Desktop variant">
          <DesktopTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
        </div >
    );
};

export default form;
