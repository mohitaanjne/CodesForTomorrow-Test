import {
  Avatar,
  ButtonGroup,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import ListIcon from "@material-ui/icons/List";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../Store/toggleButtonReducer";

const useStyles = makeStyles((theme) => ({
  sidebar_main: {
    width: "30%",
    minHeight: "100vh",
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: "2rem 3rem",
    boxSizing: "border-box",
  },
  userDeatils: {
    background: "#fff",
    padding: "0.8rem",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  details: {
    marginLeft: "1rem",
    "& .MuiTypography-h5": {
      fontSize: "1.2rem",
      fontWeight: "600",
    },
  },
  toggleButton: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    marginTop: "1.5rem",
    textAlign: "center",
    background: "#fff",
    padding: "0.8rem",
    borderRadius: "10px",
    "& .MuiTypography-h5": {
      fontWeight: "600",
    },
    "& .MuiButtonGroup-contained": {
      marginTop: "1rem",
      borderRadius: "10px",
    },
    "& .MuiButton-contained": {
      padding: "1rem 2rem",
      "&:hover": {
        background: "#96ECC7",
      },
    },
  },
  feedbackCard: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    marginTop: "1.5rem",
    textAlign: "center",
    background: "#fff",
    padding: "0.8rem",
    borderRadius: "10px",
    "& .MuiTypography-h5": {
      fontWeight: "600",
    },
    "& .MuiButton-root": {
      marginTop: "1rem",
      background: "#96ECC7",
      textTransform: "capitalize",
      fontWeight: "600",
      padding: "1rem 4rem",
      borderRadius: "10px",
    },
  },
  activeBtn: {
    background: "#96ECC7",
  },
}));

function Sidebar() {
  const classes = useStyles();
  const toggleState = useSelector((state) => state.toggle.toggle);
  const dispatch = useDispatch();

  const handleToggleBtn = (type) => {
    dispatch(toggleActions.handleToggle(type));
  };

  return (
    <div className={classes.sidebar_main}>
      <div className={classes.userDeatils}>
        <Avatar />
        <div className={classes.details}>
          <Typography variant="h5">Hi Reader,</Typography>
          <Typography>Here's your News!</Typography>
        </div>
      </div>
      <div className={classes.toggleButton}>
        <Typography variant="h5">View Toggle</Typography>
        <ButtonGroup
          variant="contained"
          aria-label="contained primary button group"
        >
          <Button
            className={toggleState === "cardView" && classes.activeBtn}
            onClick={() => {
              handleToggleBtn("cardView");
            }}
          >
            <SubtitlesIcon style={{ fontSize: "xxx-large" }} />
          </Button>
          <Button
            className={toggleState === "listView" && classes.activeBtn}
            onClick={() => {
              handleToggleBtn("listView");
            }}
          >
            <ListIcon style={{ fontSize: "xxx-large" }} />
          </Button>
        </ButtonGroup>
      </div>
      <div className={classes.feedbackCard}>
        <Typography variant="h5">Have a Feedback ?</Typography>
        <Button>We're Listening</Button>
      </div>
    </div>
  );
}

export default Sidebar;
