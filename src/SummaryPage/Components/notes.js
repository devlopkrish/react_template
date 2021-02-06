import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

 function Notes() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
   
      <div>
      
       
        <TextField
          id="filled-multiline-static"
          label="Notes"
          multiline
          rows={40}
          defaultValue="Take Notes Here"
          variant="filled"
        />
      </div>
  
       
      
 
    </form>
  );
}


export default Notes;