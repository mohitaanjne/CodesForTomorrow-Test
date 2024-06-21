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
  root: {
    width: "32%",
    borderRadius: "10px",
    marginBottom: "1rem",
    "& .MuiTypography-gutterBottom": {
      marginBottom: "0.35em",
      maxHeight: "90px",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
  },
  closeBtn: {
    position: "relative",
    top: "10px",
    left: "225px",
    color: "red",
    opacity: "0.6",
  },
  media: {
    height: 140,
  },
});

export default function CommonCard({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Dispatch action to delete card
    dispatch(deleteCard(data.id)); // Assuming data.id uniquely identifies the card
  };

  return (
    <Card className={classes.root}>
      <IconButton className={classes.closeBtn} onClick={handleDelete}>
        <CloseIcon />
      </IconButton>
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
  );
}
