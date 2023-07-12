import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login/EmailSignInForm.scss";

const EmailSignInForm = function () {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = function (email: string) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(email)) {
      return "Invalid email format!";
    }

    return "";
  };

  const validatePassword = function (password: string) {
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*.\/?]).{5,}$/;

    if (!passwordPattern.test(password)) {
      return "Password must contain letters (including upper and lowercase), numbers, special characters like *, /, ?, and be at least 5 characters long!";
    }

    return "";
  };

  const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    const emailValidationResult = validateEmail(email);
    if (emailValidationResult) {
      setEmailError(emailValidationResult);
      setEmail("");
      return;
    }

    const passwordValidationResult = validatePassword(password);
    if (passwordValidationResult) {
      setPasswordError(passwordValidationResult);
      setPassword("");
      return;
    }

    // Just for testing
    // console.log("Email:", email);
    // console.log("Password:", password);

    navigate("/HomePage", { state: { email, password } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email*</label>
      <input
        id="email"
        name="email"
        placeholder="mail@website.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      {emailError && <div className="error">{emailError}</div>}
      <label htmlFor="password">Password*</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Min. 5 characters"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      ></input>
      {passwordError && <div className="error">{passwordError}</div>}
      <div className="check-wrapper">
        <div className="remember-wrapper">
          <input type="checkbox" id="check" name="check" />
          <div>Remember me</div>
        </div>
        <a href="#">Forget password?</a>
      </div>
      <button type="submit">Login</button>
      <div className="register-text">
        Not registered yet? <a href="#">Create an Account</a>
      </div>
    </form>
  );
};

export default EmailSignInForm;
