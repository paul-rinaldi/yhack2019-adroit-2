import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../components/spinner/spinner.component';
import ResultItem from '../../components/result/result-item.component';

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

  box-shadow: 2px 2px 5px #000000;
`;

const ResultPage = ({ history, location }) => {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const API = 'http://digit42.pythonanywhere.com/?';
      const QUERY = 'query=' + location.state.query;
      const COUNT = '&count=' + location.state.count;
      const config = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      };
      const response = await axios.get(API + QUERY + COUNT, config);
      const json = response.data;
      setResults(json);
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
        results.sentiments
          .sort((a, b) => (a.score > b.score ? 1 : -1))
          .map((item, index) => <ResultItem key={index} item={item} />)
      )}
    </div>
  );
};

export default withRouter(ResultPage);
