import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  IconButton,
  OutlinedInput,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  field: {
    margin: theme.spacing(1),
  },
}));

const PasswordInputField = ({ name }) => {
  const classes = useStyles();
  const [type, setType] = useState("password");
  return (
    <FormControl className={classes.field} required variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        name={name}
        id="outlined-adornment-password"
        type={type}
        labelWidth={85}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setType(type === "password" ? "text" : "password")}
              edge="end"
            >
              <span className="material-icons">
                {type === "text" ? "visibility" : "visibility_off"}
              </span>
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default PasswordInputField;
