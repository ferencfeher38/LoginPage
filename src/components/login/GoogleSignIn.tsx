import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import "../../styles/login/GoogleSignIn.scss";

const GoogleSignIn = function () {
  const handleLoginSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log("Logged in successfully:", response);
  };

  const handleLoginFailure = function (error: any) {
    console.log("Login failed:", error);
  };

  return (
    <GoogleLogin
      clientId="408404507399-qajjdold1am3tn1qd6t1fdkaspk62m03.apps.googleusercontent.com"
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
      render={(renderProps: any) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <img src="images/google-icon.png" alt="google-icon" />
          Sign in with Google
        </button>
      )}
    />
  );
};

export default GoogleSignIn;
