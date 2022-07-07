import { useState } from "react";
import "./sign.css";

export interface UserLogin {
  email: string;
  password: string;
}

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const valid = validate();
    if (valid) {
      alert("You have successfully logged in.");
      window.location.reload();
    }
  };

  const validate = () => {
    return email === "user" && password === "web_dev";
  };

  return (
    <div className="wt__sign">
      <h1>Login</h1>
      <div className="login-error-msg-holder">
        <p className="login-error-msg">
          Invalid username{" "}
          <span className="error-msg-second-line">and/or password</span>
        </p>
      </div>
      <form className="wt__sign-in">
        <input
          className="wt__sign-in_email"
          type="email"
          placeholder="Email"
          onChange={(item) => setEmail(item.target.value)}
          value={email}
        ></input>
        <input
          className="wt__sign-in_password"
          type="password"
          placeholder="Password"
          onChange={(item) => setPassword(item.target.value)}
          value={password}
        ></input>
        <button id="btn5" type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};
