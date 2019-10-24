import React from 'react';

// Material design imports
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// You can use the auto value for every breakpoint value if you're unsure of which value to use. 
// This will try to fit as many items as possible on each row.
const autoBreakpoints = () => (
    <Grid container spacing={4}>
        <Grid item xs='auto' sm='auto' md='auto'>
            <Paper>
                xs=auto sm=auto md=auto
            </Paper>
        </Grid>
        <Grid item xs='auto' sm='auto' md='auto'>
            <Paper>
                xs=auto sm=auto md=auto
            </Paper>
        </Grid>
        <Grid item xs='auto' sm='auto' md='auto'>
            <Paper>
                xs=auto sm=auto md=auto
            </Paper>
        </Grid>
        <Grid item xs='auto' sm='auto' md='auto'>
            <Paper>
                xs=auto sm=auto md=auto
            </Paper>
        </Grid>
    </Grid>
);

export default autoBreakpoints;