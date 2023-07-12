import "../../styles/login/Footer.scss";

const Footer = function () {
  const currYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <p>© {currYear} Syncee, All rights reserved.</p>
    </div>
  );
};

export default Footer;
