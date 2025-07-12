import Cookies from "js-cookie";

export const setToken = (token) => {
  Cookies.set("jwtoken", token, {
    expires: 7,
    secure: false,
    sameSite: "Strict",
  });
};

export const getToken = () => {
  const token = Cookies.get("jwtoken");
  if (token) return token;

  return false;
};
