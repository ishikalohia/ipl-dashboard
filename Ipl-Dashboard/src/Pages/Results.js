import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import match from "../assests/match.json";
import { Pie } from "react-chartjs-2";
import Result from "../component/Result";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

var won = 0;
var loss = 0;
var fwon = 0;
var floss = 0;
var bwon = 0;
var bloss = 0;

for (let i = 0; i < match.length; i++) {
  if (match[i].Toss_Winner_Id === match[i].Match_Winner_Id) {
    won++;
  } else {
    loss++;
  }

  if (match[i].Toss_Decision === "field") {
    if (match[i].Toss_Winner_Id === match[i].Match_Winner_Id) {
      fwon++;
    } else {
      floss++;
    }
  } else {
    if (match[i].Toss_Winner_Id === match[i].Match_Winner_Id) {
      bwon++;
    } else {
      bloss++;
    }
  }
}

export default function Reports() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <center>
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "1000",
                color: "#4a04bbe8",
                marginTop: "50px",
                marginBottom: "50px",
              }}
            >
              OUTCOME AFTER WINNING TIE
            </h1>
          </center>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Pie
            data={{
              labels: ["Won", "Loss"],
              datasets: [
                {
                  label: "Winning Tie",
                  data: [won, loss],
                  backgroundColor: [
                    "rgba(100, 0, 250, 1)",
                    "rgba(220, 0, 140, 1)",
                  ],
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <center>
            <h3
              style={{
                margin: "30px",
                color: "rgb(9 47 188)",
                textTransform: "uppercase",
              }}
            >
              Decided to Bat
            </h3>
          </center>
          <Pie
            data={{
              labels: ["Won", "Loss"],
              datasets: [
                {
                  label: "Winning Tie",
                  data: [bwon, bloss],
                  backgroundColor: [
                    "rgba(100, 0, 250, 1)",
                    "rgba(220, 0, 140, 1)",
                  ],
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <center>
            <h3
              style={{
                margin: "30px",
                color: "rgb(9 47 188)",
                textTransform: "uppercase",
              }}
            >
              Decided to field
            </h3>
          </center>
          <Pie
            data={{
              labels: ["Won", "Loss"],
              datasets: [
                {
                  label: "Winning Tie",
                  data: [fwon, floss],
                  backgroundColor: [
                    "rgba(100, 0, 250, 1)",
                    "rgba(220, 0, 140, 1)",
                  ],
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <center>
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "1000",
                color: "#f50057",
                marginTop: "50px",
                marginBottom: "50px",
              }}
            >
              RESULT TYPE OVER THE SEASONS
            </h1>
          </center>
        </Grid>
        <Grid item xs={12}>
          <Result />
        </Grid>
      </Grid>
    </div>
  );
}
