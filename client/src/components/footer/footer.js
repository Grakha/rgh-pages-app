//Components
import Social from "./social";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              Budapest, Üllői út 26, 1085 Hungary
            </p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <Social />
          </div>
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="lead mb-0">
               Terms commonly used for a person who is self-employed and not necessarily committed to a particular employer long-term
            </p>
          </div>
        </div>
      </div>
      <div className="copyright text-right text-white">
        <div className="container"><small>Copyright © 2021</small></div>
      </div>
    </footer>
  );
};

export default Footer;
