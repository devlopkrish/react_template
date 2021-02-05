import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import TopAppBar from './Components/appBar'



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

        </Grid>

    ) 
    
  


}



export default MainPage;