import "./sign.css";

const Sign = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = (loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "user" && password === "web_dev") {
      alert("You have successfully logged in.");
      window.location.reload();
    } else {
      loginErrorMsg.style.opacity = 1;
    }
  };

  console.log("here");
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
          type="text"
          placeholder="Email"
        ></input>
        <input
          className="wt__sign-in_password"
          type="text"
          placeholder="Password"
        ></input>
        <button id="btn5" type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

const loginForm = document.getElementById("wt__sign-in") as HTMLElement;
const loginErrorMsg = document.getElementById("login-error-msg") as HTMLElement;

export default Sign;
