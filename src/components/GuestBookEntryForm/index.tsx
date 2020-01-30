/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useStoreActions } from '../../hooks/index';
import useStyles from './styles';
import GuestBookEntry from '../../interfaces/GuestBookEntry';

const GuestBookEntrySchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Required'),
  content: yup
    .string()
    .trim()
    .min(10, 'Must be at least 10 characters.')
    .max(200, 'Can be no longer than 200 characters.')
    .required('Required'),
});

const GuestBookEntryForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<GuestBookEntry>({
    validationSchema: GuestBookEntrySchema,
  });
  const addEntry = useStoreActions((actions) => actions.guestbook.addEntry);

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line
    addEntry(data);
  });

  const classes = useStyles();

  //! for our validation to play nice with typescript,
  //! we coerce the error prop to a boolean
  //! e.g error={!!errors.name}
  return (
    <form noValidate className={classes.formContainer} onSubmit={onSubmit}>
      <TextField
        label="name"
        inputRef={register}
        name="name"
        fullWidth
        variant="outlined"
        error={!!errors.name}
        helperText={!!errors.name && errors.name.message}
      />
      <TextField
        label="Message"
        inputRef={register}
        multiline
        name="content"
        rows="4"
        fullWidth
        variant="outlined"
        error={!!errors.content}
        helperText={!!errors.content && errors.content.message}
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
