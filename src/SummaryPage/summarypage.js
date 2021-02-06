import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Notes from "./Components/notes";
import SummaryWindow from "./Components/summyWindow";
import TopAppBar from "../MainPage/Components/appBar";
import MediaCard from "../MainPage/Components/helpercards/helpCard";
import SummaryTopBar from "./Components/summaryTopbar";

function SummaryPage() {
  return (
    <Grid>
      <TopAppBar />
      <SummaryTopBar />
      <SummaryWindow />
      <Grid container direction="row"
    justify="space-around"
     alignItems="center" space>
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />

      </Grid>
     
      
    </Grid>
  );
}





export default SummaryPage;