import React, { createRef } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import {
  PasswordInputField,
  InputField,
  Button,
  GoogleReCaptcha,
} from "../../shared";
import { getUser, reCaptchaTokenIsValid } from "../../functions";

import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
  },
}));

const Login = ({ setMessage }) => {
  const classes = useStyles();
  const { push } = useRouter();
  const recaptchaRef = createRef();

  const _onSubmit = async (event) => {
    event.preventDefault();

    const token = await recaptchaRef.current.executeAsync();

    recaptchaRef.current.reset();

    const boolean = await reCaptchaTokenIsValid(token);

    if (!boolean) {
      return setMessage("Failed to validate reCAPTCHA.");
    }

    const user = getUser();

    let username = event.target.elements.username.value;
    let password = event.target.elements.password.value;

    if (user) {
      if (username === user?.name && password === user?.pass) {
        sessionStorage.setItem("isLoggedIn", true);
        setMessage("login success");

        push("/profile");
      } else {
        setMessage("username or password is wrong");
      }
    } else {
      setMessage("sign-up first");
    }
  };

  return (
    <form onSubmit={_onSubmit} id="login_form">
      <Paper className={classes.paper} elevation={3}>
        <h1>Login</h1>

        <InputField name="username" />
        <br />
        <PasswordInputField name="password" />
        <br />

        <Button>Login</Button>
        <br />
        <br />
        <Link href="/signup">Create an account now!</Link>
      </Paper>
      <GoogleReCaptcha ref={recaptchaRef} />
    </form>
  );
};

export default Login;
