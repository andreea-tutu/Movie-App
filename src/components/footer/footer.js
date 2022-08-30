import "./footer.scss";

function Footer() {
  return (
    <div className="main-footer footer1">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6">
            <h4>About Us</h4>
            <ul className="list-unstyled">
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 col-sm-6">
            <h4>Media</h4>
            <ul className="list-unstyled">
              <li>Cookies Preferences</li>
              <li>Media Center</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 col-sm-6">
            <h4>GDPR</h4>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Conditions of Use</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Movie App - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
