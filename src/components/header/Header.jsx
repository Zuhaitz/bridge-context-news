import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <p className="navbar__name">News Outlet</p>

        <div className="navbar__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/form"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            Form
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            News
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
