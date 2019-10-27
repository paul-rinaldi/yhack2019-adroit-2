import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './searchStyle.css';

const SearchPage = ({ history }) => {
  const [searchQuery, setSearchQuery] = useState('jetBlue');

  const onSubmit = async event => {
    event.preventDefault();
    history.push({
      pathname: '/results',
      state: {
        query: searchQuery,
        count: 10
      }
    });
  };

  return (
    <div>
      <div id="cover">
        <form onSubmit={onSubmit}>
          <div className="tb">
            <div className="td">
              <input
                name="query"
                type="text"
                // placeholder={searchQuery}
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
    </div>
  );
};

export default withRouter(SearchPage);
