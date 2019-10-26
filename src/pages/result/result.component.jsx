import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { fetchResultsAsync } from '../../components/firebase/firebase.util';

const ResultPage = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    // setResultfetchResultsAsync();
  }, []);

  const generate = element => {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value
      })
    );
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">Text only</Typography>
        <div>
          <List>
            {generate(
              <ListItem>
                <ListItemText primary="Single-line item" />
              </ListItem>
            )}
          </List>
        </div>
      </Grid>
    </Grid>
  );
};

export default ResultPage;
