import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

const columnDirection = (props) => (
    <div>
        <Grid container justify='space-around' spacing={4}>
            <Grid item xs={3}>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <Paper>
                            <Typography>One</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Typography>Two</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <Paper>
                            <Typography>Three</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Typography>Four</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <Paper>
                            <Typography>Five</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Typography>Six</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Hidden smDown>
                <Grid item xs={3}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item>
                            <Paper>
                                <Typography>Seven</Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper>
                                <Typography>Eight</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    </div>
);

export default columnDirection;