import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

const HomePage = function () {
  const location = useLocation();
  const { email, password } = location.state || {};

  return (
    <div>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <Link to="/ListPage">List Page</Link>
      <Link to="/">Login Page</Link>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
