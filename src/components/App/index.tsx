/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import useStyles from './utils';
import Home from '../Home/index';
// root of application, using nav bar component from material ui

const App: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick={() => history.push('/')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => history.push('/about')}>
            About
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
