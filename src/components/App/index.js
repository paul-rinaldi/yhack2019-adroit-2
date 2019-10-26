import React from 'react';
import * as ROUTES from '../../constants/routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from '../../pages/search';
import ResultPage from '../../pages/result/result.component';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.SEARCH} component={SearchPage} />
      <Route exact path={ROUTES.RESULTS} component={ResultPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
