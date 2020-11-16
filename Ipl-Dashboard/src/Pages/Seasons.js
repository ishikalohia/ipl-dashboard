import React from "react";
import match from "../assests/match.json";
import team from "../assests/team.json";
import { Line, Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Seasonscroll from "../component/seasonscroll";

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

var season1 = new Array(team.length - 4).fill(0);
var season2 = new Array(team.length - 4).fill(0);
var season3 = new Array(team.length - 4).fill(0);
var season4 = new Array(team.length - 4).fill(0);
var season5 = new Array(team.length - 4).fill(0);
var season6 = new Array(team.length - 4).fill(0);
var season7 = new Array(team.length - 4).fill(0);
var season8 = new Array(team.length - 4).fill(0);
var season9 = new Array(team.length - 4).fill(0);

for (let i = 0; i < match.length; i++) {
  if (match[i].Season_Id === 1) {
    season1[match[i].Match_Winner_Id - 1]++;
  } else if (match[i].Season_Id === 2) {
    season2[match[i].Match_Winner_Id - 1]++;
  } else if (match[i].Season_Id === 3) {
    season3[match[i].Match_Winner_Id - 1]++;
  } else if (match[i].Season_Id === 4) {
    season4[match[i].Match_Winner_Id - 1]++;
  } else if (match[i].Season_Id === 5) {
    season5[match[i].Match_Winner_Id - 1]++;
  } else if (match[i].Season_Id === 6) {
    season6[match[i].Match_Winner_Id - 1]++;
  } else if (match[i].Season_Id === 7) {
    season7[match[i].Match_Winner_Id - 1]++;
  } else if (match[i].Season_Id === 8) {
    season8[match[i].Match_Winner_Id - 1]++;
  } else {
    season9[match[i].Match_Winner_Id - 1]++;
  }
}

var teamName = new Array(team.length - 5);

for (let i = 0; i < 8; i++) {
  teamName[i] = team[i].Team_Short_Code;
}

function Products() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
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
              SEASON BASED ANALYSIS
            </h1>
          </center>
          <Seasonscroll />
        </Grid>
        <Grid item xs={12} sm={12}>
          <center>
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "1000",
                color: "#0959b9",
                alignItems: "center",
                marginTop: "50px",
                marginBottom: "40px",
              }}
            >
              SEASON-WISE WIN SPLIT OF TEAMS
            </h1>
          </center>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Line
            data={{
              labels: teamName,
              datasets: [
                {
                  label: "2008 Winning Share",
                  data: season1,
                  borderColor: "rgba(255, 0, 70, 1)",
                  backgroundColor: "rgba(255, 0, 70, 0.5)",
                  borderWidth: 2,
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Line
            data={{
              labels: teamName,
              datasets: [
                {
                  label: "2009 Winning Share",
                  data: season2,
                  borderColor: "rgba(50, 200, 70, 1)",
                  backgroundColor: "rgba(50, 200, 70, 0.5)",
                  borderWidth: 2,
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Line
            data={{
              labels: teamName,
              datasets: [
                {
                  label: "2010 Winning Share",
                  data: season3,
                  borderColor: "rgba(50, 100, 255, 1)",
                  backgroundColor: "rgba(50, 100, 255, 0.5)",
                  borderWidth: 2,
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Line
            data={{
              labels: teamName,
              datasets: [
                {
                  label: "2011 Winning Share",
                  data: season4,
                  borderColor: "rgba(190, 100, 255, 1)",
                  backgroundColor: "rgba(190, 100, 255, 0.5)",
                  borderWidth: 2,
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Line
            data={{
              labels: teamName,
              datasets: [
                {
                  label: "2012 Winning Share",
                  data: season5,
                  borderColor: "rgba(250, 100, 255, 1)",
                  backgroundColor: "rgba(250, 100, 255, 0.5)",
                  borderWidth: 2,
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Line
            data={{
              labels: teamName,
              datasets: [
                {
                  label: "2013 Winning Share",
                  data: season6,
                  borderColor: "rgba(50, 200, 155, 1)",
                  backgroundColor: "rgba(50, 200, 155, 0.5)",
                  borderWidth: 2,
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Line
            data={{
              labels: teamName,
              datasets: [
                {
                  label: "2014 Winning Share",
                  data: season7,
                  borderColor: "rgba(0, 0, 255, 1)",
                  backgroundColor: "rgba(0, 0, 255, 0.5)",
                  borderWidth: 2,
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Line
            data={{
              labels: teamName,
              datasets: [
                {
                  label: "2015 Winning Share",
                  data: season8,
                  borderColor: "rgba(50, 200, 255, 1)",
                  backgroundColor: "rgba(50, 200, 255, 0.5)",
                  borderWidth: 2,
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Line
            data={{
              labels: teamName,
              datasets: [
                {
                  label: "2016 Winning Share",
                  data: season9,
                  borderColor: "rgba(250, 0, 5, 1)",
                  backgroundColor: "rgba(250, 0, 5, 0.5)",
                  borderWidth: 2,
                },
              ],
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;
