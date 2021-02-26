import { Link } from 'react-scroll'

const menu = [
  { link: "portfolio" },
  { link: "about" },
  { link: "contact" }
]

const Nav = () => {

  const menuItems = menu.map((item, index) => {
    return  (
      <li className="nav-item mx-0 mx-lg-1" key={index}>
        <Link
          className="nav-link py-3 px-0 px-lg-3 rounded"
          href={`#${item.link}`}
          activeClass="active"
          to={item.link}
          spy={true}
          smooth="easeInOut"
          duration={500}>{item.link}</Link>
      </li>
    )
  });

  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <Link
          onClick={(e) => e.preventDefault()}
          className="navbar-brand js-scroll-trigger"
          href="#header"
          to="header"
          spy={true}
          smooth="easeInOut"
          duration={500}>Logo</Link>
        <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            { menuItems }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
