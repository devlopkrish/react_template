import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Notes from "./notes";
import { useState } from "react";
import NotesChip from "./notechip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",

    "& > *": {
      margin: theme.spacing(1),
      height: 600,
      overflow: "scroll",

      //height: "60vh",
    },
  },
}));

function SummaryWindow() {
  const [notesList, setnotesList] = React.useState([]);

  const classes = useStyles();
  const selectedText = (e) => {
    setnotesList([...notesList, window.getSelection().toString()]);
    console.log(notesList);

    
  };

  const noteBoxes=notesList.map((each)=>{
    return <NotesChip text={each} />
  })
  return (
    <div className={classes.root}>
      <Grid container item xs={12}>
        <Grid container item xs={8}>
          <Paper elevation={3}>
            <Typography>
              <p
                onMouseUpCapture={selectedText}
                style={{
                  lineHeight: 2.5,
                  margin: 8.5,
                }}
              >
                The Economic Survey of India is an annual document of the
                Ministry of Finance, Government of India. The Department of
                Economic Affairs, Ministry of Finance presents the Survey in the
                Parliament every year, just before the Union Budget. It is
                prepared under the guidance of the Chief Economic Adviser of
                India.[1] This document is presented to both Houses of
                Parliament during the Budget Session. The first Economic Survey
                of India was presented in 1950-51 as part of the Union Budget.
                After 1964 it was separated from the Budget and presented each
                year during the Budget Session before the presentation of the
                budget.[2] The document is non-binding. Nevertheless, is
                constructed and presented each year due to its significance The
                document is the Ministry's view[clarification needed] on the
                state of the economy of the country. This document of the
                Ministry, the Economic Survey of India reviews the developments
                in the Indian economy over the past financial year, summarizes
                the performance on major development programs, and highlights
                the policy initiatives of the government and the prospects of
                the economy in the short to medium term.[1] Unlike the
                traditional Economic Survey, the Economic Survey of India for
                2016–17, prepared by Chief Economic Adviser Arvind
                Subramanian,[3] did not have the detailed financial statistics
                of the Government of India.[4]{" "}
              </p>
            </Typography>
          </Paper>
        </Grid>

        <Grid container item xs={4}>
          {noteBoxes}
        </Grid>
      </Grid>
    </div>
  );
}




export default SummaryWindow;
