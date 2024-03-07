import React, { FC, ReactElement } from 'react';

import { ITextField } from './interfaces/ITextField';
import { TextField } from '@mui/material';

export const TaskTitleField: FC<ITextField> = (
  props,
): ReactElement => {
  const {
    onChange = (e) => console.log(e),
  } = props;

  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      onChange={onChange}
    />
  );
};

