import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import season from "../assests/season.json";
import player from "../assests/player.json";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

var index = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontWeight: 400,
    border: 0,
    borderRadius: 3,
    color: "white",
  },
}));

export default function Seasonscroll() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Season 1" {...a11yProps(0)} />
          <Tab label="Season 2" {...a11yProps(1)} />
          <Tab label="Season 3" {...a11yProps(2)} />
          <Tab label="Season 4" {...a11yProps(3)} />
          <Tab label="Season 5" {...a11yProps(4)} />
          <Tab label="Season 6" {...a11yProps(5)} />
          <Tab label="Season 7" {...a11yProps(6)} />
          <Tab label="Season 8" {...a11yProps(7)} />
          <Tab label="Season 9" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      {index.map((i) => (
        <TabPanel value={value} index={i}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#09bc27" }}
              >
                <h3>YEAR</h3>
                <br></br> <h1>{season[i].Season_Year}</h1>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#d217d5" }}
              >
                <h3>Purple Cap Holder</h3> <br></br>
                <h1>{player[season[i].Purple_Cap_Id - 1].Player_Name}</h1>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#f5ba14" }}
              >
                <h3>Orange Cap Holder</h3>
                <br></br>
                <h1>{player[season[i].Orange_Cap_Id - 1].Player_Name}</h1>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#588cea" }}
              >
                <h3>Man of the Series </h3>
                <br></br>
                <h1>
                  {player[season[i].Man_of_the_Series_Id - 1].Player_Name}
                </h1>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </div>
  );
}
