import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const auth = useSelector(state=> state.user.auth)
  
  const [category, setCategory] = useState(false);
  const loggedOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("persist:root");
    window.location.reload();
  };

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div
            className="catgrories  d_flex"
            onClick={() => {
              setCategory(!category);
            }}
          >
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>
          <div className="navlink">
            <div className="md:hidden navlink  ">
              <div
                className="toggle"
                onClick={() => setMobileMenu(!MobileMenu)}
              >
                {MobileMenu ? (
                  <i className=" fas fa-times close home-btn"></i>
                ) : (
                  <i className="fas fa-bars open"></i>
                )}
              </div>
            </div>
            <div>
              <ul
                className={
                  MobileMenu
                    ? " bg-grey nav-links-MobileMenu"
                    : "link flex capitalize "
                }
                onClick={() => setMobileMenu(false)}
              >
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/auction">auction</Link>
                </li>

                <li>
                  <Link to="/contactus">contact us</Link>
                </li>
                <li>
                  <Link to="/aboutus">about us</Link>
                </li>
                {auth ?(
                  <>
                  <li>
                  <Link to="/aboutus">checkout</Link>
                </li>
                  <li onClick={loggedOut}>
                    <Link to="/">logout</Link>
                  </li>
                  </>
                ) : (
                  <div className="flex">
                    <li>
                      <a href="http://localhost:3001/">Sell</a>
                    </li>
                    <li>
                      <Link to="/login">login</Link>
                    </li>
                    <li>
                      <Link to="/cusSignup">sign up</Link>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
