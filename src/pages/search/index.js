import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import style from './searchStyle.css';
import { fetchResultsAsync } from '../../components/firebase/firebase.util';

const SearchPage = ({ history }) => {
  const [searchQuery, setSearchQuery] = useState('Jetblue');
  // const [redirect, setRedirect]
  const { query } = searchQuery;

  const onSubmit = async event => {
    event.preventDefault();
    history.push('/results');
    // search(searchQuery);
  };

  return (
    <div>
      <div id="cover">
        <form onSubmit={onSubmit}>
          <div class="tb">
            <div class="td">
              <input
                name="query"
                type="text"
                // placeholder={searchQuery}
                value={searchQuery}
                required
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div class="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SearchPage);
