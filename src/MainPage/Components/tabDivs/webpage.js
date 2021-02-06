import { Grid } from '@material-ui/core';
import React from 'react'


function WebPage(props) {

    return(
       
    
    <iframe style={{
    width:750,
    height:550,
    marginTop:-25,
    marginLeft:0,
    
    }} src={props.url}>

    </iframe>
    )


}

export default WebPage;