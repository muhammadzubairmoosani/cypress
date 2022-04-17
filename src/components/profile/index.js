import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { Button } from "../../shared";
import { getUser } from "../../functions";

const Profile = () => {
  const { push } = useRouter();
  const user = getUser();

  const _singOut = () => {
    sessionStorage.setItem("isLoggedIn", false);
    push("/login");
  };

  return (
    <Fragment>
      <h1>{`Welcome "${user?.name}" to the profile page`}</h1>
      <Button onClick={() => push("/")}>Go to home</Button>
      Or
      <Button onClick={_singOut}>Sign out</Button>
    </Fragment>
  );
};

export default Profile;
