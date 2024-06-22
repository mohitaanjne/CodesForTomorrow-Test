import React, { useEffect, useState } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../Store/fetchUserData";
import CommonCard from "./cardView";
import ListView from "./listView";

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    width: "66%",
    padding: "2.5rem",
    minHeight: "100vh",
    transition: "350ms, easeIn",
  },
  isActiveFeedback: {
    "&$containerFluid": {
      filter: "blur(6px)",
      opacity: "0.5",
      transition: "350ms, easeIn",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  paginationContainer: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
  },
}));

function MainContent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toggleState = useSelector((state) => state.toggle.toggle);
  const isFeedback = useSelector((state) => state.toggle.isFeedback);
  const userData = useSelector((state) => state.fetchUserData.userData);
  // const loading = useSelector((state) => state.fetchUserData.loading);
  const error = useSelector((state) => state.fetchUserData.error);

  const [showLoading, setShowLoading] = useState(true);

  const [page, setPage] = useState(1);
  const cardsPerPage = 6;

  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = userData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    dispatch(fetchUserData()).then(() => {
      setTimeout(() => {
        setShowLoading(false);
      }, 5000);
    });
  }, [dispatch]);

  return (
    <div
      className={`${classes.containerFluid} ${
        isFeedback && classes.isActiveFeedback
      }`}
    >
      <div className={classes.container}>
        {showLoading ? (
          <Typography variant="h4">Loading...</Typography>
        ) : error ? (
          <Typography variant="h4">Error: {error}</Typography>
        ) : (
          currentCards.map((data, key) => (
            <React.Fragment key={key}>
              {toggleState === "cardView" ? (
                <CommonCard key={key} data={data} />
              ) : (
                <ListView key={key} data={data} />
              )}
            </React.Fragment>
          ))
        )}
      </div>
      <div className={classes.paginationContainer}>
        <Pagination
          count={Math.ceil(userData.length / cardsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
        />
      </div>
    </div>
  );
}

export default MainContent;
