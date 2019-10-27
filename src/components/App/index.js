import React from 'react';
import styled from 'styled-components';
import * as ROUTES from '../../constants/routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from '../../pages/search/search.component';
import ResultPage from '../../pages/result/result.component';

const StyleWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  width: 90vw;
  margin: auto;
`;

const App = () => (
  <BrowserRouter>
    <Switch>
      <StyleWrapper>
        <Route exact path={ROUTES.SEARCH} component={SearchPage} />
        <Route exact path={ROUTES.RESULTS} component={ResultPage} />
      </StyleWrapper>
    </Switch>
  </BrowserRouter>
);

export default App;
