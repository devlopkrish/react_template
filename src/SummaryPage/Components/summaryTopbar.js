import { Grid, TextField } from "@material-ui/core";
import TranslateIcon from '@material-ui/icons/Translate';
import Fab from '@material-ui/core/Fab';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import CreateIcon from '@material-ui/icons/Create';

function SummaryTopBar() {



return(
    <Grid
    style={{
        marginTop:10,
        marginBottom:10,
        
    }}
     container   direction="row"
     justify="space-around"
     alignItems="center" item xs={12}>
   <TextField
          required
          id="outlined-required"
          label="Percent"
          defaultValue="Hello World"
          variant="outlined"
        />


    <Fab color="primary" aria-label="add">
        <TranslateIcon />
      </Fab>

      <Fab color="secondary" aria-label="add">
        <VolumeUpIcon />
      </Fab>

      <Fab color="green" aria-label="add">
        <CreateIcon />
      </Fab>
    </Grid>
)



}

export default SummaryTopBar;