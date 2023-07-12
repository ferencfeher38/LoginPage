import Header from "./Header";
import "../../styles/login/Login.scss";
import GoogleSignIn from "./GoogleSignIn";
import Divider from "./Divider";
import EmailSignInForm from "./EmailSignInForm";
import Footer from "../layout/Footer";

const Login = function () {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <Header></Header>
        <GoogleSignIn></GoogleSignIn>
        <Divider></Divider>
        <EmailSignInForm></EmailSignInForm>
      </div>
      <Footer></Footer>
      <div className="login-wallpaper"></div>
    </div>
  );
};

export default Login;
