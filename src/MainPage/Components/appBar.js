import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     
    },
    menuButton: {
      marginRight: theme.spacing(4),
    },
    title: {
      flexGrow: 1,
      fontFamily:'Alfa Slab One', 
      letterSpacing:2,

    },
  }));



function TopAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar style={{ backgroundColor:'#ff2e63'}} position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              MAIBRAIN
            </Typography>
            <Button color="inherit">Dashboard</Button>
            <Button color="inherit">Explore</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
export default TopAppBar;