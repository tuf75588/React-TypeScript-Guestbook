/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import useStyles from './styles';

const GuestBookEntryForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any): void => {
    console.log(data);
  };
  const classes = useStyles();
  const refs = React.useRef();
  return (
    <form
      noValidate
      className={classes.formContainer}
      onSubmit={() => handleSubmit(onSubmit)}
    >
      <TextField
        label="name"
        inputRef={register}
        name="name"
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Message"
        inputRef={register}
        multiline
        name="name"
        rows="4"
        fullWidth
        variant="outlined"
      />
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" type="submit" color="primary">
          Add Entry
        </Button>
      </Box>
    </form>
  );
};

export default GuestBookEntryForm;
