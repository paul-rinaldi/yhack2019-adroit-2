import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../components/spinner/spinner.component';
import ResultItem from '../../components/result/result-item.component';
import ConcernItem from '../../components/result/concern-item.component';

const SearchButton = styled.button`
  background-color: #003876;
  margin: 2em auto;
  border-radius: 5px;
  font-size: 1.1em;
  width: 10em;
  height: 3em;
  transition: 0.3s;
  font-weight: 500;
  &:hover {
    background-color: #0e75eb;
  }
  box-shadow: 2px 2px 5px #000000;
`;

const ConcernTitle = styled.div`
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const ConcernWrapper = styled.div`
  margin-left: 1em;
  margin-botton: 2em;
  padding-bottom: 1em;
`;

const ConcernContainer = ({ concerns }) =>
  concerns.map((concern, index) => (
    <ConcernItem key={index} concern={concern} />
  ));

const SentimentContainer = ({ sentiments }) =>
  sentiments
    .sort((a, b) => (a.score > b.score ? 1 : -1))
    .map((item, index) => <ResultItem key={index} item={item} />);

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
        <div>
          <ConcernTitle>⚠️ Area of Concerns ⚠️</ConcernTitle>
          <ConcernWrapper>
            <ConcernContainer concerns={results.concerns} />
          </ConcernWrapper>
          <SentimentContainer sentiments={results.sentiments} />
        </div>
      )}
    </div>
  );
};

export default withRouter(ResultPage);
