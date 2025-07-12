import React from "react";
import { loginAction } from "../../actions/loginAction";

function Login() {
  console.log("lp");
  const handleSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData);
    loginAction(formObj);
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}

export default Login;
