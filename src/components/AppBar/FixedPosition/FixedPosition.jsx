import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const fixedPosition = (props) => (
    <div>
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton
                    color='inherit'
                    aria-label='Menu'
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant='title'
                    color='inherit'
                >
                    Title
                </Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
        <ul>
            {new Array(500).fill(null).map((v, i) => (
                <li key={i}>{i}</li>
            ))}
        </ul>
    </div>
);

export default fixedPosition;