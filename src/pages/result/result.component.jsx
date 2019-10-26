import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

const ResultItem = styled.div`
  background-color: white;
  // ${props => (props.negative ? 'red' : 'darkgreen')}
  border-radius: 6px;
  color: black;
  margin: 0 1em 1em;
  padding: 2em 1em;
`;

const Header = styled.h2`
  text-align: center;
  color: #003876;
  cursor: pointer;
  :hover {
    font-size: 2em;
  }
  transition: 0.3s;
`;

const ResultList = styled.div`
  position: absolute;
  top: 100px;
  width: 100vw;
`;

const ResultPage = ({ history }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    // setResultfetchResultsAsync();
  }, []);

  const generate = element => {
    return [12].map(value =>
      React.cloneElement(element, {
        key: value
      })
    );
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header onClick={() => history.push('/')}>Back</Header>

        <ResultList>
          {generate(<ResultItem>Single line item </ResultItem>)}
        </ResultList>
      </Grid>
    </Grid>
  );
};

export default withRouter(ResultPage);
