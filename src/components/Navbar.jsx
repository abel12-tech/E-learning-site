import { Link } from "react-router-dom";
import logo from "../img/logo.png";
const Navbar = () => {
  return (
    <div className="nav-component">
      <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link to='/' className="navbar-brand">
                  {" "}
                  <img src={logo} alt="logoooo" />{" "}
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse main-menu-item justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                      <Link to='/' className="nav-link" >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/about-us' className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/courses' className="nav-link" >
                        Courses
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="blog.html"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="single-blog.html">
                          Single blog
                        </a>
                        <a className="dropdown-item" href="elements.html">
                          Elements
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link to='/contact-us' className="nav-link" >
                        Contact
                      </Link>
                    </li>
                    <li className="d-none d-lg-block">
                      <a className="btn_1" href=".">
                        Get a Quote
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
