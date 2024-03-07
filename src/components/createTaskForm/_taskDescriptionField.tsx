import React, { FC, ReactElement } from 'react';

import { ITextField } from './interfaces/ITextField';
import { TextField } from '@mui/material';

export const TaskDescriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  const {
    onChange = (e) => console.log(e),
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
    />
  );
};

