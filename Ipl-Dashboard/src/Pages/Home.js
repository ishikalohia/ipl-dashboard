import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Bar } from "react-chartjs-2";
import match from "../assests/match.json";
import player from "../assests/player.json";
import season from "../assests/season.json";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Ratio from "../component/ratio";
import Batsman from "../component/Batsman";
import Homehead from "../component/HomeHead";

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

var playername = new Array(player.length);

for (let i = 0; i < player.length; i++) {
  playername[i] = player[i].Player_Name;
}

var manOfmatch = new Array(player.length).fill(0);
// console.log(player.length);

for (let i = 0; i < match.length; i++) {
  manOfmatch[match[i].Man_Of_The_Match_Id - 1]++;
}

var playerName = new Array(season.length);

for (var i = 0; i < season.length; i++) {
  var val = season[i].Man_of_the_Series_Id;
  playerName[i] = player[val].Player_Name;
}
var series = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];
var index = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let motm = [
  {
    name: playername[0],
    count: manOfmatch[0],
  },
];

for (let i = 1; i < playername.length; i++) {
  motm.push({
    name: playername[i],
    count: manOfmatch[i],
  });
}

motm.sort((m1, m2) => (m1.count < m2.count ? 1 : m1.count > m2.count ? -1 : 0));

var sortedname = [];
var sortedcount = [];

for (let i = 0; i < 20; i++) {
  sortedname[i] = motm[i].name;
}

for (let i = 0; i < 20; i++) {
  sortedcount[i] = motm[i].count;
}

var hmotm = motm.slice(0, 20);
console.log(hmotm.name);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Homehead />
        </Grid>

        <Grid item xs={12} sm={8}>
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "1000",
              color: "#04b0a0",
              margin: "30px",
            }}
          >
            TOP 10 BATSMEN
          </h1>
          <Batsman />
        </Grid>
        <Grid item xs={12} sm={4}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "1000",
              color: "#04b0a0",
              margin: "30px",
            }}
          >
            MAN OF THE SERIES
          </h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
              <TableHead>
                <TableRow
                  style={{
                    backgroundColor: "#04b0a0",
                  }}
                >
                  <TableCell
                    style={{
                      color: "#fafafa",
                      fontWeight: "700",
                      textTransform: "uppercase",
                    }}
                  >
                    Season
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#fafafa",
                      fontWeight: "700",
                      textTransform: "uppercase",
                    }}
                  >
                    Man of the Series
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {index.map((i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      {series[i]}
                    </TableCell>
                    <TableCell>{playerName[i]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <h1
            style={{
              fontSize: "70px",
              fontWeight: "1000",
              color: "#ed3a53e8",
              margin: "30px",
            }}
          >
            <center>MAN OF THE MATCH</center>
          </h1>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="GH Gayle"
                height="500"
                image="https://i.pinimg.com/736x/b8/d4/46/b8d44612876cda526e39a982a0dbe831.jpg"
                title="CH Gayle"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CH Gayle
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  CH Gayle won Man of the match for maximum number of times.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Bar
            data={{
              labels: sortedname,
              datasets: [
                {
                  label: "Man of the Match",
                  data: sortedcount,
                  backgroundColor: "rgba(255, 0, 70, 1)",
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
