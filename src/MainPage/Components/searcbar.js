import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
   // display: "flex",
 //   flexWrap: "wrap",
    width: 950,
    marginLeft:10,

  },
  margin: {
    
    margin: theme.spacing(0),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    backgroundColor:'#f6f5f5',
    height:50
  },
}));

function SearchBar() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    query: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Grid container>
    <div className={classes.root}>
      <div>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="query">Search</InputLabel>
          <Input
          className={classes.textField}
            id="query"
            value={values.query}
            onChange={handleChange("query")}
            startAdornment={<SearchIcon position="start">$</SearchIcon>}
          />
        </FormControl>
      </div>
    </div>
    </Grid>
  );
}
export default SearchBar;
