import React, { FC, ReactElement } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { IDateField } from './interfaces/IDateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';

export const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  const {
    value = new Date(),
    onChange = (date) => console.log(date),
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          renderInput={(params) => (
            <TextField {...params} />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

