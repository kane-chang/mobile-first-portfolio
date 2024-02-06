// import React from "react";
import { NavLink } from "react-router-dom";

const NavTabs = () => {
  const toggleMenu = () => {
    const menu = document.querySelector("#nav-overlay");
    if (menu?.classList.contains("-translate-x-full")) {
      menu.classList.remove("-translate-x-full");
    } else {
      menu?.classList.add("-translate-x-full");
    }
  };

  return (
    <>
      <nav
        className="fixed py-5 px-10 md:px-20 lg:px-32 w-full flex justify-between text-xl"
        id="navbar"
      >
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
            className="hidden md:flex text-accentOrange"
            href="https://drive.google.com/file/d/1tC2l8JGctKf1myJKMnhQVQFyUexpRQZn/view"
            target="blank"
          >
            .cv
          </a>
        </div>
        <div className="">
          <button className="md:hidden navbar-toggler" onClick={toggleMenu}>
            <i className="fa-solid fa-bars text-accentOrange hover:text-accentOrange/50"></i>
          </button>
        </div>
        <div className="hidden md:flex space-x-5">
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
          <a
            className=""
            href="https://github.com/kane-chang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github text-xl text-accentOrange"></i>
          </a>
          <a
            className=""
            href="https://www.linkedin.com/in/kane-chang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-xl text-accentOrange"></i>
          </a>
        </div>
      </nav>

      {/* nav menu */}
      <div
        id="nav-overlay"
        className=" w-3/4 fixed left-full top-0 h-full transform transition ease-in-out duration-500 md:hidden rounded-l-3xl"
      >
        <div className="flex px-10 py-10 text-xl text-inter font-bold items-center justify-between">
          <h2>Menu</h2>
          <button onClick={toggleMenu}>
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>
        <div className="flex flex-col space-y-5 pl-10 mt-12">
          <a
            className="text-accentOrange"
            href="https://drive.google.com/file/d/1tC2l8JGctKf1myJKMnhQVQFyUexpRQZn/view"
            target="blank"
          >
            .cv
          </a>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-white active"
                : "nav-link text-accentOrange"
            }
            onClick={toggleMenu}
          >
            about()
          </NavLink>
          <a
            className="text-accentOrange flex items-center"
            href="https://github.com/kane-chang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github text-xl text-accentOrange mr-3"></i>
            GitHub
          </a>
          <a
            className="text-accentOrange flex items-center"
            href="https://www.linkedin.com/in/kane-chang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-xl text-accentOrange mr-3"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default NavTabs;
