import { Button, Grid, makeStyles, TextField, Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TabControl from "./tabControl";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import MediaCard from "./helpercards/helpCard";

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
    <Grid container style={{ marginTop: 0, marginLeft: 10 }}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <TabControl />
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Box p zIndex="modal" style={{ top: 500 }}>
              <Fab color="primary" aria-label="add">
                <WbSunnyIcon />
              </Fab>
            </Box>
          </Grid>






        </Grid>
 
      </Grid>
    </Grid>
  );
}
export default MainAssemble;
