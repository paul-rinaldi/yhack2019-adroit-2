import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';

const Banner = styled.div`
  margin-top: 17vh;
  font-size: 15em;
  text-align: center;
  color: white;
  text-shadow: 0 6px 20px #888888;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
  transition: 0.3s;
  &:hover {
    font-size: 16em;
  }
`;

const CountContainer = styled.div`
  position: absolute;
  top: 72%;
  left: 37%;
  display: flex;
  align-items: center;
  text-shadow: 0 2px 2px #888888;
`;

const CountLabel = styled.span`
  color: white;
`;

const CountInput = styled.input`
  font-size: 1.7em;
  width: 2.5em;
  margin-left: 0.4em;
  color: #003876;
`;

const SearchPage = ({ history }) => {
  const [searchQuery, setSearchQuery] = useState('jetBlue');
  const [queryCount, setQueryCount] = useState(23);

  const onSubmit = async event => {
    event.preventDefault();
    history.push({
      pathname: '/results',
      state: {
        query: searchQuery,
        count: queryCount
      }
    });
  };

  return (
    <div>
      <Banner>adroit</Banner>
      <div id="cover">
        <form onSubmit={onSubmit}>
          <div className="tb">
            <div className="td">
              <input
                name="query"
                type="text"
                value={searchQuery}
                required
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <CountContainer>
        <CountLabel>number of tweets to analyze:</CountLabel>
        <CountInput
          name="count"
          type="number"
          value={queryCount}
          required
          onChange={e => setQueryCount(e.target.value)}
        ></CountInput>
      </CountContainer>
    </div>
  );
};

export default withRouter(SearchPage);
