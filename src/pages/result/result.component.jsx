import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import ThumbUpIcon from '@material-ui/icons/ThumbUpTwoTone';
import ThumbDownIcon from '@material-ui/icons/ThumbDownTwoTone';
import Grid from '@material-ui/core/Grid';

const API = 'http://digit42.pythonanywhere.com/?query=';
const DEFAULT_QUERY = 'jetblue';

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
  const [results, setResults] = useState({ sentiments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      };
      const response = await axios.get(API + DEFAULT_QUERY, config);
      const json = response.data;
      setResults({ sentiments: json });
    };
    fetchData();
  }, []);
  console.log(results);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header onClick={() => history.push('/')}>Back</Header>
        <ResultList>
          {results.sentiments.map(({ review, score }) => (
            <ResultItem>
              {review}
              {score}
              <ThumbUpIcon color="primarykey" style={{ left: '0' }} />
              <ThumbDownIcon color="secondary" style={{ right: '0' }} />
            </ResultItem>
          ))}
        </ResultList>
      </Grid>
    </Grid>
  );
};

export default withRouter(ResultPage);
