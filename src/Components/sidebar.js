import {
  Avatar,
  ButtonGroup,
  Button,
  Typography,
  makeStyles,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import React, { useState } from "react";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import ListIcon from "@material-ui/icons/List";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../Store/toggleButtonReducer";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  sidebar_main: {
    width: "28%",
    transition: "350ms, easeIn",
    minHeight: "100vh",
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: "2rem 3rem",
    boxSizing: "border-box",
    position: "fixed",
    left: "0",
    background: "#E4EAF0",
    zIndex: "1",
    display: "flex",
  },
  sideView: {
    width: "100%",
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
      padding: "1rem 2.5rem",
      borderRadius: "10px",
      fontSize: "1rem",
    },
  },
  isActiveFeedback: {
    "& $feedbackCard": {
      "& .MuiButton-root": {
        background: "#EBA3A7 !important",
      },
    },
    "& $feedbackForm": {
      display: "block",
      transition: "350ms, easeIn",
    },
    "&$sidebar_main": {
      width: "78%",
      transition: "350ms, easeIn",
    },
    "& $sideView": {
      width: "28%",
      transition: "350ms, easeIn",
    },
  },
  activeBtn: {
    background: "#96ECC7",
  },
  feedbackForm: {
    display: "none",
    width: "68%",
    height: "calc(100vh - 4rem)",
    overflowY: "auto",
    marginLeft: "3rem",
    "& .MuiTypography-h5": {
      fontSize: "1.4rem",
      fontWeight: "600",
    },
  },
  formRoot: {
    marginTop: "2rem",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiButton-root": {
      marginTop: "1.5rem",
      background: "#5CC8A1",
      textTransform: "capitalize",
      fontWeight: "600",
      fontSize: "1rem",
      color: "#fff",
      padding: "0.8rem 2rem",
      borderRadius: "10px",
    },
  },
  textField: {
    marginTop: "1.5rem",
    "& .MuiInputBase-root": {
      background: "#FFF",
      borderRadius: "0.5rem",
      padding: "0.35rem 1rem",
      width: "65%",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    "& .MuiFormLabel-root": {
      fontSize: "1.25rem",
      color: "#000",
    },
    "& label + .MuiInput-formControl": {
      marginTop: "1.5rem",
    },
  },
  addressField: {
    "& .MuiInputBase-root": {
      width: "90%",
    },
  },
}));

function Sidebar() {
  const classes = useStyles();
  const toggleState = useSelector((state) => state.toggle.toggle);
  const isFeedback = useSelector((state) => state.toggle.isFeedback);
  const dispatch = useDispatch();

  const handleToggleBtn = (type) => {
    dispatch(toggleActions.handleToggle(type));
  };
  const handleToggleFeedback = () => {
    dispatch(toggleActions.handleToggleFeedback());
  };

  const initialState = {
    first_name: "",
    last_name: "",
    address: "",
    country: "",
    email: "",
    phone: "",
  };

  const [formDetails, setFormDetails] = useState(initialState);

  const handleFormChange = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmit = () => {
    if (!formDetails.first_name) {
      alert("All fields should be entered correctly");
      return;
    }
    if (!formDetails.last_name) {
      alert("All fields should be entered correctly");
      return;
    }
    if (!formDetails.address) {
      alert("All fields should be entered correctly");
      return;
    }
    if (!formDetails.country) {
      alert("All fields should be entered correctly");
      return;
    }
    if (!formDetails.email) {
      alert("All fields should be entered correctly");
      return;
    }
    if (!formDetails.phone) {
      alert("All fields should be entered correctly");
      return;
    }
    setFormDetails(initialState);
  };

  return (
    <div
      className={`${classes.sidebar_main} ${
        isFeedback && classes.isActiveFeedback
      }`}
    >
      <div className={classes.sideView}>
        <div className={classes.userDeatils}>
          <Avatar />
          <div className={classes.details}>
            <Typography variant="h5">Hi Reader,</Typography>
            <Typography>Here's your News!</Typography>
          </div>
        </div>
        {!isFeedback && (
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
        )}
        <div className={classes.feedbackCard}>
          <Typography variant="h5">Have a Feedback ?</Typography>
          <Button onClick={handleToggleFeedback}>We're Listening!</Button>
        </div>
      </div>
      <div className={classes.feedbackForm}>
        <Typography variant="h5">
          Thank you so much for taking the time!
        </Typography>
        <Typography>Please provide the below details!</Typography>
        <form className={classes.formRoot} noValidate autoComplete="off">
          <TextField
            label="First Name:"
            id="standard-start-adornment"
            InputLabelProps={{ shrink: true }}
            className={classes.textField}
            InputProps={{ disableUnderline: true }}
            value={formDetails.first_name}
            onChange={(e) => {
              handleFormChange("first_name", e.target.value);
            }}
            placeholder="John"
          />
          <TextField
            label="Last Name:"
            id="standard-start-adornment"
            InputLabelProps={{ shrink: true }}
            className={classes.textField}
            InputProps={{ disableUnderline: true }}
            value={formDetails.last_name}
            onChange={(e) => {
              handleFormChange("last_name", e.target.value);
            }}
            placeholder="Doe"
          />
          <TextField
            label="Address:"
            id="standard-start-adornment"
            InputLabelProps={{ shrink: true }}
            className={`${classes.textField} ${classes.addressField}`}
            InputProps={{ disableUnderline: true }}
            value={formDetails.address}
            onChange={(e) => {
              handleFormChange("address", e.target.value);
            }}
            multiline
            minRows={6}
            maxRows={6}
            placeholder="Enter your full postal address"
          />
          <TextField
            label="Country:"
            id="standard-start-adornment"
            InputLabelProps={{ shrink: true }}
            className={classes.textField}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={formDetails.country}
            onChange={(e) => {
              handleFormChange("country", e.target.value);
            }}
            placeholder="India"
          />
          <TextField
            label="Email ID:"
            id="standard-start-adornment"
            InputLabelProps={{ shrink: true }}
            className={classes.textField}
            InputProps={{ disableUnderline: true }}
            value={formDetails.email}
            onChange={(e) => {
              handleFormChange("email", e.target.value);
            }}
            placeholder="example@sample.com"
          />
          <TextField
            type="number"
            label="Phone Number:"
            id="standard-start-adornment"
            InputLabelProps={{ shrink: true }}
            className={classes.textField}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
            value={formDetails.phone}
            onChange={(e) => {
              handleFormChange("phone", e.target.value);
            }}
            placeholder="1234567890"
          />
          <Button onClick={handleSubmit}>Submit Feedback</Button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
