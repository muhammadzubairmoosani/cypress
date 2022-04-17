import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import redirect from "nextjs-redirect";
import { getUser } from "../../functions";

const PrivateRoute = (Component) => {
  const AuthenticatedRoutes = ({ ...props }) => {
    const { pathname } = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const Redirect = redirect("/");

    useEffect(() => {
      setUser(getUser());
      setLoading(false);
    }, []);

    if (loading) return "loading...";

    switch (pathname) {
      case "/login":
      case "/signup":
        if (user?.isLoggedIn) {
          return <Redirect />;
        } else {
          return <Component {...props} />;
        }

      case "/profile":
        if (user?.isLoggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect />;
        }

      default:
        return <Redirect />;
    }
  };

  return AuthenticatedRoutes;
};

export default PrivateRoute;
