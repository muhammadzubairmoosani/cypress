import React from "react";
import { Button, makeStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  button: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const CommonButton = ({ children, onClick, loading, endIcon }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button
        className={classes.button}
        type="submit"
        onClick={onClick}
        variant="contained"
        color="primary"
        size="large"
        endIcon={endIcon}
      >
        {children}
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

export default CommonButton;
