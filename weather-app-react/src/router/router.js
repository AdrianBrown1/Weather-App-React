import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { home } from '../constants/routes';
import dashboard from '../containers/dash-board-container/dash-board-container';

export default () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path={home} component={dashboard}/>
      </Switch>
    </Fragment>
  </Router>
)