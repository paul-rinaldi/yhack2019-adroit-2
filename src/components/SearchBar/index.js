import react from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const SearchPage = () => (
    <div>
      <Paper className={classes.root}>
        <Typography button>
          <h2>I would like to know about</h2> 
        </Typography>
      </Paper>
    </div>
);

export default SearchPage;