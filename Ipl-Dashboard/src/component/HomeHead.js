import React from "react";
import season from "../assests/season.json";
import team from "../assests/team.json";
import player from "../assests/player.json";
import match from "../assests/match.json";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginBottom: 80,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontSize: "50px",
    fontWeight: 600,
    border: 0,
    borderRadius: 3,
    color: "white",
  },
}));

export default function HomeHead() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <center>
          <h1
            style={{
              fontSize: "70px",
              fontWeight: "1000",
              color: "#240a8b",
              marginBottom: "80px",
            }}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCNnlY6pxIbNMs5jPHpGkRTH1vTulVawyiSg&usqp=CAU"></img>{" "}
            INDIAN PREMIERE LEAGUE
          </h1>
        </center>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} style={{ background: "#09bc27" }}>
            {season.length} Season
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} style={{ background: "#fe0c5a" }}>
            {player.length} Players
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} style={{ background: "#48bff8" }}>
            {team.length} Teams
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} style={{ background: "#d217d5" }}>
            {match.length} Matches
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
