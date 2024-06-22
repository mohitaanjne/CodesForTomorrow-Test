import React from "react";
import MainContent from "./Components/mainContent";
import "./App.css";
import { makeStyles } from "@material-ui/core";
import Sidebar from "./Components/sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    background: "#E4EAF0",
    position: "relative",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
