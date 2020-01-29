import React from 'react';
import { TextField } from '@material-ui/core';
import useStyles from './styles';

const GuestBookEntryForm: React.FC = () => {
  const classes = useStyles();
  return (
    <form noValidate className={classes.formContainer}>
      <TextField label="name" name="name" />
    </form>
  );
};

export default GuestBookEntryForm;
