import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="/">Home</a>
    </p>
    <p>
      <a href="/inventory">Inventory</a>
    </p>
    <p>
      <a href="/manage">Manage</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="wt__navbar">
      <div className="wt__navbar-links">
        <div className="wt__navbar-links_logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="wt__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="wt__navbar-sign">
        <p>
          <a href="/signin">Sign in</a>
        </p>
        <button type="button">Sign Up</button>
      </div>
      <div className="wt__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="wt__navbar-menu_container scale-up-center">
            <div className="wt__navbar-menu_container-links">
              <Menu />
              <div className="wt__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
