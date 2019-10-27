import React from 'react';
import styled from 'styled-components';

const ConcernItemContainer = styled.div`
  background-color: black;
  color: white;
  border-radius: 4px;
  margin: 0.5em;
  padding: 0.6em;
  display: inline-block;
  box-shadow: 0 5px 10px #888888;
`;

const ConcernItem = ({ concern }) => (
  <ConcernItemContainer>{concern}</ConcernItemContainer>
);

export default ConcernItem;
