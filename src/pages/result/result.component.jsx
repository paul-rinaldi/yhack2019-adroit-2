import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../components/spinner/spinner.component';
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
  border-radius: 5px;
  font-size: 1em;
  width: 10em;
  height: 3em;
  transition: 0.3s;

  &:hover {
    background-color: #0e75eb;
  }
`;

const ResultPage = ({ history, location }) => {
  const [results, setResults] = useState({ sentiments: [] });
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <SearchButton onClick={() => history.push('/')}>
        Search Again
      </SearchButton>
      {isLoading ? (
        <Spinner />
      ) : (
        results.sentiments.map(({ review, score }) => (
          <ResultItem>
            {review}
            {score}
            <ThumbUpIcon color="primarykey" />
            <ThumbDownIcon color="secondary" />
          </ResultItem>
        ))
      )}
    </div>
  );
};

export default withRouter(ResultPage);
