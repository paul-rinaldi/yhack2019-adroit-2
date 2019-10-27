import React from 'react';
import styled from 'styled-components';
import { Line } from 'rc-progress';

const ResultItemContainer = styled.div`
  background-color: white;
  border-radius: 6px;
  color: black;
  margin: 0 1em 1em;
  padding: 2em 1em 1em;
  box-shadow: 0 4px 10px #888888;
`;

const Review = styled.div`
  margin-bottom: 0.5em;
`;

const Score = styled.div`
  margin-top: 0.5em;
  text-align: right;
`;

const ResultItem = ({ item }) => {
  const { review, score } = item;
  let color = null;
  let adjustedScore = null;
  if (score <= 0) {
    adjustedScore = (-score * 100).toFixed(2);
    color = '#bb2124';
  } else {
    adjustedScore = (score * 100).toFixed(2);
    color = '#22bb33';
  }
  return (
    <ResultItemContainer>
      <Review>{review}</Review>
      <Line percent={adjustedScore} strokeWidth="1" strokeColor={color} />
      <Score>Negativity: {adjustedScore}%</Score>
    </ResultItemContainer>
  );
};

export default ResultItem;
