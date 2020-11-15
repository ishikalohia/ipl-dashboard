import React from "react";
import { Bar, Line } from "react-chartjs-2";
import player from "../assests/player.json";
import season from "../assests/season.json";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Ballbyball from "../assests/ballbyball.json";

const useStyles = makeStyles({
  table: {
    Width: 300,
  },
});

var playername = new Array(player.length);

for (let i = 0; i < player.length; i++) {
  playername[i] = player[i].Player_Name;
}

var scores = new Array(player.length).fill(0);

for (let i = 0; i < Ballbyball.length; i++) {
  scores[parseInt(Ballbyball[i].Striker_Id) - 1] += parseInt(
    Ballbyball[i].Batsman_Scored
  );
}

let Scores = [
  {
    name: playername[0],
    count: scores[0],
  },
];

for (let i = 1; i < player.length; i++) {
  Scores.push({
    name: playername[i],
    count: scores[i],
  });
}

Scores.sort((m1, m2) =>
  m1.count < m2.count ? 1 : m1.count > m2.count ? -1 : 0
);

// console.log(Scores[1].name);

var sortedname = [];
var sortedcount = [];

for (let i = 0; i < 10; i++) {
  sortedname[i] = Scores[i].name;
}

console.log(sortedname);

for (let i = 0; i < 10; i++) {
  sortedcount[i] = Scores[i].count;
}

const Barchart = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <Line
          data={{
            labels: sortedname,
            datasets: [
              {
                label: "TOP 10 BATSMEN",
                data: sortedcount,
                borderColor: "rgba(4, 176, 160,1)",
                backgroundColor: "rgba(4, 176, 160, 0.5)",
                borderWidth: 2,
              },
            ],
          }}
          options={{ maintainAspectRatio: true }}
        />
      </Grid>
    </Grid>
  );
};

export default Barchart;
