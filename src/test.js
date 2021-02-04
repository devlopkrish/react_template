import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import Box from '@material-ui/core/Box'










export default function Test() {
 

    return (

        <Grid container spacing={3}

            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}

        >

            <Grid item>

                <Button style={{
                    backgroundColor:'red'
                }} variant="contained" color="primary">Grid 1</Button>






            </Grid>

        </Grid>

    );
}
