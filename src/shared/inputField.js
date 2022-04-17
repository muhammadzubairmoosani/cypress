import React from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  IconButton,
  OutlinedInput,
} from "@material-ui/core";

const InputField = ({ name }) => {
  return (
    <FormControl required variant="outlined">
      <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
      <OutlinedInput
        name={name}
        id="outlined-adornment-username"
        labelWidth={85}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <span className="material-icons">person</span>
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default InputField;
