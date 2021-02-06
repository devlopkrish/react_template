import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Notes from "./Components/notes";
import SummaryWindow from "./Components/summyWindow";
import TopAppBar from "../MainPage/Components/appBar";


function SummaryPage() {
  return (
    <Grid>
      <TopAppBar />
      <SummaryWindow />
    </Grid>
  );
}





export default SummaryPage;