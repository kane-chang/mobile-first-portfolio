// import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const NavTabs = () => {
  return (
    <nav className="py-5 px-32 flex justify-between text-xl" id="navbar">
      <div className="flex space-x-5">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-white active" : "text-accentOrange"
          }
        >
          .kane-chang
        </NavLink>
        <a
          className="text-accentOrange"
          href="https://drive.google.com/file/d/1tC2l8JGctKf1myJKMnhQVQFyUexpRQZn/view"
          target="blank"
        >
          .cv
        </a>
      </div>
      <div className="">
        {/* <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars text-accent-orange"></i>
        </button> */}
      </div>
      <div className="flex space-x-5">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? "nav-link text-white active"
              : "nav-link text-accentOrange"
          }
        >
          about()
        </NavLink>
        {/* <a className="nav-link text-accent-orange" href="#">about()</a> */}
        <a
          className=""
          href="https://www.linkedin.com/in/kane-chang/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin text-xl text-accentOrange"></i>
        </a>
        <a
          className=""
          href="https://github.com/kane-chang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github text-xl text-accentOrange"></i>
        </a>
      </div>
      {/* <a className="navbar-brand text-accent-orange" href="#">.kane-chang</a> */}
      {/* <a className="nav-link text-accent-orange me-auto" href="#">.CV</a> */}
    </nav>
  );
};

export default NavTabs;
