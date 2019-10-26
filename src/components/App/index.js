import React from 'react';
import * as ROUTES from '../../constants/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchPage from '../SearchBar';

const App = () => (
  <Router>
    <Route exact path={ROUTES.SEARCH} component={SearchPage} />
  </Router>
);

export default App;
