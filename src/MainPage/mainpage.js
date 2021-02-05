import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import TopAppBar from './Components/appBar'
import MainAssemble from './Components/assemble';
import SearchBar from './Components/searcbar';
import TabControl from './Components/tabControl';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     
    },
    mainGrid :{
        minHeight: '100vh',
        backgroundColor:"#252a34" 
    },

    

  }));





function MainPage() {
    const classes = useStyles();
    return(
        <Grid 

            container
            className={classes.mainGrid}

        >

        <TopAppBar />
        <SearchBar />
        <MainAssemble />
        </Grid>

    ) 
    
  


}



export default MainPage;