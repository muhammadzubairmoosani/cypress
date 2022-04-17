import React, { Fragment } from "react";
import { Icon } from "@material-ui/core";
import { Button } from "../../shared";
import { getUser } from "../../functions";
import { useRouter } from "next/router";

const Home = () => {
  const { push } = useRouter();
  const user = getUser();

  return (
    <Fragment>
      <h1>Authenticated route example with NextJs</h1>
      <h2>Welcome to the Home page</h2>

      <Button
        endIcon={<Icon>send</Icon>}
        onClick={() => push(user?.isLoggedIn ? "/profile" : "/login")}
      >
        {user?.isLoggedIn ? "Profile" : "Login"}
      </Button>
    </Fragment>
  );
};

export default Home;
