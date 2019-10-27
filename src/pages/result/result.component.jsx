import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import ThumbUpIcon from '@material-ui/icons/ThumbUpTwoTone';
import ThumbDownIcon from '@material-ui/icons/ThumbDownTwoTone';

const ResultItem = styled.div`
  background-color: white;
  border-radius: 6px;
  color: black;
  margin: 0 1em 1em;
  padding: 2em 1em;
`;

const SearchButton = styled.button`
  background-color: #003876;
  margin: 2em auto;
  border-radius: 6px;
  font-size: 1em;
  width: 10em;
  height: 3em;
`;

const ResultPage = ({ history, location }) => {
  const [results, setResults] = useState({ sentiments: [] });

  const API = 'http://digit42.pythonanywhere.com/?query=';
  const QUERY = location.state.query;

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
      const response = await axios.get(API + QUERY, config);
      const json = response.data;
      setResults({ sentiments: json });
    };
    fetchData();
  }, []);

  return (
    <Container>
      <SearchButton onClick={() => history.push('/')}>
        Search Again
      </SearchButton>

      {results.sentiments.map(({ review, score }) => (
        <ResultItem>
          {review}
          {score}
          <ThumbUpIcon color="primarykey" />
          <ThumbDownIcon color="secondary" />
        </ResultItem>
      ))}
    </Container>
  );
};

export default withRouter(ResultPage);
