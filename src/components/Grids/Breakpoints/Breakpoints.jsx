import React from 'react';

//Material design imports
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Container with spacing between items, ocupying the specified "grid with" depending on viewport size
const breakpoints = () => (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>xs=12 sm=6 md=3</Paper>
      </Grid>
    </Grid>
);

export default breakpoints;