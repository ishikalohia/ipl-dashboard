import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import team from "../assests/team.json";
import match from "../assests/match.json";

var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var played = new Array(team.length).fill(0);
var Won = new Array(team.length).fill(0);

for (let i = 0; i < match.length; i++) {
  played[match[i].Team_Name_Id - 1]++;
  played[match[i].Opponent_Team_Id - 1]++;

  Won[match[i].Match_Winner_Id - 1]++;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <center>
            <h1
              style={{
                fontSize: "70px",
                fontWeight: "1000",
                color: "#0959b9",
                alignItems: "center",
                marginBottom: "40px",
              }}
            >
              TEAMS
            </h1>
          </center>
        </Grid>
        {index.map((i) => (
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <img
                src={team[i].img}
                style={{ width: "80%", height: "200px" }}
              ></img>
              <center>
                <h2>{team[i].Team_Name}</h2>
                <h3>({team[i].Team_Short_Code})</h3>
                <br />
                <h4 style={{ color: "rgb(0,0,255)" }}>
                  Matches Played : {played[i]}
                </h4>
                <h4 style={{ color: "#46a907" }}>Matches Won : {Won[i]}</h4>
              </center>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
