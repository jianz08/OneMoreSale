import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import greeting from './greeting.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Item() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <img src={greeting} alt="Logo" height="80" width="100"/>
        </Grid>
        <Grid item xs={5}>
          <p> Item Name </p>
          <p> Condition </p>
          <p> Location </p>
          <p> Seller </p>      
        </Grid>
        <Grid item xs={2}>
          <p> Price </p>
        </Grid>
        <Grid item xs={2}>
          <p> Status </p>
        </Grid>
      </Grid>
    </div>
  );
}
