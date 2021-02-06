import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Paper from '@material-ui/core/Paper';

function NotesChip(props) {
    return(
        <Paper style={{
            backgroundColor:"yellowgreen",
            width:"70%",
            margin:4.5,
            padding:8,
            textAlign:"left",
           
        }}>
        {props.text}
        </Paper>
    )





}

export default NotesChip;