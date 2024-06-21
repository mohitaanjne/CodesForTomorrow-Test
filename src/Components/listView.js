import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { deleteCard } from "../Store/fetchUserData";

const useStyles = makeStyles({
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardRoot: {
    width: "90%",
    borderRadius: "10px",
    marginBottom: "1rem",
    "& .MuiTypography-gutterBottom": {
      marginBottom: "0.35em",
    },
  },
  closeBtn: {
    color: "red",
    padding: "15px",
    background: "white",
    opacity: "0.6",
  },
});

export default function ListView({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Dispatch action to delete card
    dispatch(deleteCard(data.id)); // Assuming data.id uniquely identifies the card
  };

  return (
    <div className={classes.main}>
      <Card className={classes.cardRoot}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <IconButton className={classes.closeBtn} onClick={handleDelete}>
        <CloseIcon />
      </IconButton>
    </div>
  );
}
