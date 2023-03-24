import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import "./Menu.css";
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
const Menu = () => {
  const [mobileMenuOpned, displayMobileMenu] = useState(false);
  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link className="nav-link scrollto active" to="/">
            <div className="logo">
              <img src="./logo.png" className="img-fluid" />
            </div>
          </Link>
          <nav
            id="navbar"
            className={mobileMenuOpned ? "navbar navbar-mobile" : "navbar"}
          >
            <ul>
              <li>
                <Link className="nav-link scrollto" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/about">
                  About
                </Link>
              </li>
              <li>
                <NavHashLink
                  to="/#services"
                  smooth
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Services
                </NavHashLink>
              </li>
              {/* <li>
                <Link className="nav-link scrollto" to="/gallery">
                  Gallery
                </Link>
              </li> */}
              <li>
                <NavHashLink
                  to="/#portfolio"
                  smooth
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Products
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#contact"
                  smooth
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Contact
                </NavHashLink>
              </li>
            </ul>
            <i
              className={
                mobileMenuOpned
                  ? "bi mobile-nav-toggle bi-x"
                  : "bi bi-list mobile-nav-toggle"
              }
              onClick={() => {
                displayMobileMenu(!mobileMenuOpned);
              }}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Menu;
