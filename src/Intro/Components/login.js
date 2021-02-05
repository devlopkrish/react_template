import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import brain from '../../assets/IntroAssets/brain.gif'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    grid: {
        margin: theme.spacing(15),
    },
}));



function Login() {

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }} >
            <Grid container justify="center" >

                <img src={brain} style={{
                    width: 300,
                    marginRight: 40,
                }}></img>
            </Grid>

            <Grid >




                <TextField id="outlined-basic" label="Login" variant="outlined"></TextField>
                <Link to="/main">
                    <Button

                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        style={{
                            marginLeft: 10,
                            height: 60
                        }}

                    >
                        Send
      </Button>
                </Link>

            </Grid>





        </Grid>
    )







}





export default Login




