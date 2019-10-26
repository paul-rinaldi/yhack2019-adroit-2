import React from 'react';
import * as ROUTES from '../../constants/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchPage from '../../pages/search';
import ResultPage from '../../pages/result/result.component';

const App = () => (
  <Router>
    <Route exact path={ROUTES.SEARCH} component={SearchPage} />
    <Route exact path={ROUTES.RESULTS} component={ResultPage} />
  </Router>
);

export default App;
