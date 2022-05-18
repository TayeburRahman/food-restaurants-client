import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import avatar from "../../../utility/commentAvatar.jpg";
import Logo from "../../../utility/logo.png";
import useCart from "../../AddCart/useCartHook";
import useAuth from "../../LoginSignupPage/useAuthHook";
import styles from "./Navbar.module.css";

//* NAVBAR COMPONENT
const Navbar = () => {
  //* function from useCustomAuthFunction
  const { isLoggedIn } = useAuth();
  // console.log(isLoggedIn)
  //* function from useCartFunction
  const { cartItems } = useCart();

  // console.log(isLoggedIn)
  const navigate = useNavigate();
  //* Navbar Background Change
  const [navbarColor, setNavbarColor] = useState(false);
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  //* Navbar Collapsed with onClicked event on mobile device
  //* Right Now Not Use to on NavLink onClick={() => handleCollapse()}
  // const handleCollapse = (e) => {
  //     e.preventDefault()
  //     const nav = document.getElementById("navbarSupportedContent");
  //     const btn = document.getElementById("navbarBtn");
  //     nav.classList.remove("show");
  //     btn.classList.add("collapsed");
  // };
  return (
    <>
      <header className={styles.navbarWrapper}>
        <div className={styles.navbarInner}>
          <nav
            className={
              navbarColor
                ? "navbar navbar-expand-lg fixed-top navbar-light bg-light px-3"
                : "navbar navbar-expand-lg navbar-light"
            }
          >
            <div className={`container ${styles.customContainer}`}>
              <img
                src={Logo}
                alt="Icon"
                className={`img-fluid ${styles.Logo}`}
                onClick={() => navigate("/")}
              />
              <button
                className={`navbar-toggler ${styles.navbarBtn}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.navbarUl}`}
                >
                  <li className={`nav-item ${styles.navbarList}`}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${styles.isActive}`
                          : `nav-link ${styles.inActive}`
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className={`nav-item ${styles.navbarList}`}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${styles.isActive}`
                          : `nav-link ${styles.inActive}`
                      }
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className={`nav-item ${styles.navbarList}`}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${styles.isActive}`
                          : `nav-link ${styles.inActive}`
                      }
                      to="/menus"
                    >
                      Menus
                    </NavLink>
                  </li>
                  <li className={`nav-item ${styles.navbarList}`}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${styles.isActive}`
                          : `nav-link ${styles.inActive}`
                      }
                      to="/blogs"
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li className={`nav-item ${styles.navbarList}`}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${styles.isActive}`
                          : `nav-link ${styles.inActive}`
                      }
                      to="/reservation"
                    >
                      Reservation
                    </NavLink>
                  </li>
                  <li className={`nav-item ${styles.navbarList}`}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${styles.isActive}`
                          : `nav-link ${styles.inActive}`
                      }
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className={`nav-item ${styles.navbarList}`}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${styles.isActive}`
                          : `nav-link ${styles.inActive}`
                      }
                      to="/career"
                    >
                      Career
                    </NavLink>
                  </li>
                  {cartItems.length >= 1 && (
                    <li
                      className={`nav-item position-relative ${styles.navbarList}`}
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? `nav-link ${styles.isActive}`
                            : `nav-link ${styles.inActive}`
                        }
                        to="/addCart"
                      >
                        <span class="position-absolute top-0 start-55 translate-middle badge rounded-pill bg-danger">
                          {cartItems.length}
                        </span>
                        <FontAwesomeIcon
                          className={styles.cartNumberReceiver}
                          icon={faShoppingCart}
                        />
                      </NavLink>
                    </li>
                  )}
                </ul>
                <div
                  className={`d-flex justify-content-center mx-auto ${styles.login}`}
                >
                  {isLoggedIn.email && isLoggedIn.emailVerified ? (
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${styles.isActive}`
                          : `nav-link ${styles.inActive}`
                      }
                      to="/dashboard"
                    >
                      <img
                        src={
                          isLoggedIn.photo == null ? avatar : isLoggedIn.photo
                        }
                        alt=""
                        className="img-fluid rounded-circle"
                        style={{ width: "45px" }}
                      />
                    </NavLink>
                  ) : (
                    <NavLink
                      className={`nav-link ${styles.navLink}`}
                      to="/login"
                    >
                      LogIn
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </nav>
          {/* Show All Route Pages By Clicking Nav link */}
          <Outlet />
        </div>
      </header>
    </>
  );
};

export default Navbar;
