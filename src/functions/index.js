import { SECRET } from "../utils/constant";

export const getUser = () => {
  if (typeof window !== "undefined") {
    let name = sessionStorage.getItem("username");
    let pass = sessionStorage.getItem("password");
    let isLoggedIn = sessionStorage.getItem("isLoggedIn");
    isLoggedIn = isLoggedIn ? eval(isLoggedIn) : isLoggedIn;

    return { name, pass, isLoggedIn };
  }
};

export const reCaptchaTokenIsValid = (token) => {
  const api = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET}&response=${token}`;

  return fetch(api, { method: "POST" })
    .then((res) => res.json())
    .then((json) => json.success)
    .catch((err) => err);
};
