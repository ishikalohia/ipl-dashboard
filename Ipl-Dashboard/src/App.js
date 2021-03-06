import React from "react";
import "./App.css";
import Navbar from "./component/Sidebar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import Seasons from "./Pages/Seasons";
import Team from "./Pages/Team";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/seasons" component={Seasons} />
          <Route path="/team" component={Team} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
