import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TabControl from "./tabControl";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Alfa Slab One",
    letterSpacing: 2,
  },
}));

function MainAssemble() {
  const classes = useStyles();

  return (
    <Grid container style={{marginTop:-60,marginLeft:10}}>
      <Grid container item xs={12}> 
        <Grid item xs={10}>
          <TabControl />
        </Grid>

        <Grid item xs={2}>
          <h1>Column 2</h1>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainAssemble;
