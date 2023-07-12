import "../../styles/login/Header.scss";

const Header = function () {
  return (
    <>
      <img
        className="logo"
        src="images/syncee-logo.png"
        alt="syncee-logo"
      ></img>
      <div className="title">Login</div>
      <div className="text">See your growth and get consulting support!</div>
    </>
  );
};

export default Header;
