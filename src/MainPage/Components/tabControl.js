import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import WebIcon from "@material-ui/icons/Web";
import AssignmentIcon from "@material-ui/icons/Assignment";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import TextField from "@material-ui/core/TextField";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: "#252a34",
    display: "flex",
    height: 400,
  },
  tabs: {
    backgroundColor: "#f6f6f6",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function TabControl() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          icon={
            <WebIcon
              style={{
                width: 25,
              }}
            />
          }
          label="Web"
          {...a11yProps(0)}
        />

        <Tab
          icon={
            <AssignmentIcon
              style={{
                width: 25,
              }}
            />
          }
          label="Notes"
          {...a11yProps(1)}
        />
        <Tab
          icon={
            <MenuBookIcon
              style={{
                width: 25,
              }}
            />
          }
          label="Books"
          {...a11yProps(2)}
        />

        <Tab
          icon={
            <YouTubeIcon
              style={{
                width: 25,
              }}
            />
          }
          label="Videos"
          {...a11yProps(3)}
        />

        <Tab
          icon={
            <CastForEducationIcon
              style={{
                width: 25,
              }}
            />
          }
          label="Courses"
          {...a11yProps(4)}
        />
      </Tabs>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
}


export default TabControl;