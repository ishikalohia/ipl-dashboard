import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import match from "../assests/match.json";
import { Bar } from "react-chartjs-2";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

var seasons = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];
var index = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var NormalResult = new Array(seasons.length).fill(0);
var Tie = new Array(seasons.length).fill(0);
var NoResult = new Array(seasons.length).fill(0);

for (let i = 0; i < match.length; i++) {
  if (match[i].IS_Result === 1) {
    if (match[i].Win_Type === "Tie") {
      Tie[match[i].Season_Id - 1]++;
    } else {
      NormalResult[match[i].Season_Id - 1]++;
    }
  } else {
    NoResult[match[i].Season_Id - 1]++;
  }
}

export default function Result() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Bar
              data={{
                labels: seasons,
                datasets: [
                  {
                    label: "Normal Result",
                    data: NormalResult,
                    backgroundColor: "rgba(255, 0, 70, 1)",
                  },
                  {
                    label: "Tie",
                    data: Tie,
                    backgroundColor: "rgba(0, 255, 70, 1)",
                  },
                  {
                    label: "No Result",
                    data: NoResult,
                    backgroundColor: "rgba(0, 70, 255, 1)",
                  },
                ],
              }}
              options={{ maintainAspectRatio: true }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          {" "}
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
                    Normal Result
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#fafafa",
                      fontWeight: "700",
                      textTransform: "uppercase",
                    }}
                  >
                    Tie
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#fafafa",
                      fontWeight: "700",
                      textTransform: "uppercase",
                    }}
                  >
                    No Result
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {index.map((i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      {seasons[i]}
                    </TableCell>
                    <TableCell>{NormalResult[i]}</TableCell>
                    <TableCell>{Tie[i]}</TableCell>
                    <TableCell>{NoResult[i]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
