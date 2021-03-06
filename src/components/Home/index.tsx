import React, { useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useStoreState } from '../../hooks/index';
import useStyles from './style';
import GuestBookEntryForm from '../GuestBookEntryForm';

const Home: React.FC = () => {
  const entries = useStoreState((state) => state.guestbook.entries);
  const classes = useStyles();
  return (
    <div>
      <GuestBookEntryForm />
      {entries.map((entry) => (
        <Card key={entry.id} className={classes.entryCard}>
          <CardContent>
            <Typography variant="h2">{entry.name}</Typography>
            <Typography variant="body1">{entry.content}</Typography>
            <Typography variant="caption">
              {entry.created ? entry.created.toLocaleTimeString() : ''}
            </Typography>
            <pre>{entry.id}</pre>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
