import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { home } from '../constants/routes';
import Dashboard from '../containers/dash-board-container/dash-board-container';
import Error from '../components/error/error';
export default () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path={home} component={Dashboard}/>
        <Route component={Error}/>
      </Switch>
    </Fragment>
  </Router>
)