import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import style from './searchStyle.css';
import { fetchResultsAsync } from '../../components/firebase/firebase.util';

const SearchPage = ({ history }) => {
  const [searchQuery, setSearchQuery] = useState('Jetblue');
  // const [redirect, setRedirect]

  const handleChange = event => {
    setSearchQuery(searchQuery);
  };

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
                type="text"
                placeholder={searchQuery}
                value={searchQuery}
                required
                handleChange={handleChange}
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
