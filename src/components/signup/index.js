import React, { createRef } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import {
  PasswordInputField,
  InputField,
  Button,
  GoogleReCaptcha,
} from "../../shared";
import { reCaptchaTokenIsValid } from "../../functions";

import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
  },
}));

const Signup = ({ setMessage }) => {
  const { push } = useRouter();
  const classes = useStyles();
  const recaptchaRef = createRef();

  const _onSubmit = async (event) => {
    event.preventDefault();

    const token = await recaptchaRef.current.executeAsync();

    recaptchaRef.current.reset();

    const boolean = await reCaptchaTokenIsValid(token);

    if (!boolean) {
      return setMessage("Failed to validate reCAPTCHA.");
    }

    let username = event.target.elements.username.value;
    let password = event.target.elements.password.value;

    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("isLoggedIn", false);

    push("/login");
    setMessage("sign-up success");
  };

  return (
    <form onSubmit={_onSubmit} id="sign-up_form">
      <Paper className={classes.paper} elevation={3}>
        <h1>Sign up</h1>

        <InputField name="username" />
        <br />
        <PasswordInputField name="password" />
        <br />

        <Button>Sign-up</Button>
        <br />
        <br />
        <Link href="/login">Already have an account!</Link>
      </Paper>
      <GoogleReCaptcha ref={recaptchaRef} />
    </form>
  );
};

export default Signup;
