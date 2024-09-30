import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LenguageContext from "../Context/LenguageContext";
// import logo from "../assets/Logo_personal.webp";
import ThemeContext from "../Context/ThemeContext";

const Menu = () => {
  const { texts } = useContext(LenguageContext);
  const { btntheme, viewLogo, handleTheme } = useContext(ThemeContext);
  const [viewMenu, setViewMenu] = useState("");
  const [scroll, setScroll] = useState(0);

  const handleMenu = () => {
    if (viewMenu === "") {
      setViewMenu("is-active");
    } else {
      setViewMenu("");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <>
      <header className={`header ${scroll > 50 ? `header-background` : null}`}>
        <section className={`hea-container`}>
          <div className="hea-logo">
            <NavLink to="/">
              <img src={viewLogo} alt="Logo" />
            </NavLink>
          </div>
          <nav className={`hea-menu ${viewMenu}`}>
            <NavLink
              to="/"
              onClick={handleMenu}
              className={({ isActive }) => (isActive ? "activeLink" : null)}
            >
              {texts.navHome}
            </NavLink>
            <NavLink
              to="/proyectos"
              onClick={handleMenu}
              className={({ isActive }) => (isActive ? "activeLink" : null)}
            >
              {texts.navProyect}
            </NavLink>

            <NavLink
              to="/formacion"
              onClick={handleMenu}
              className={({ isActive }) => (isActive ? "activeLink" : null)}
            >
              {texts.navforma}
            </NavLink>
            <NavLink
              to="/habilidades"
              onClick={handleMenu}
              className={({ isActive }) => (isActive ? "activeLink" : null)}
            >
              {texts.navSkill}
            </NavLink>
          </nav>
          <div className="hea-contexts">
            {/* <select
              name="lenguage"
              onChange={handleLanguage}
              value={
                localStorage.getItem("lenguage") === null
                  ? "es"
                  : localStorage.getItem("lenguage")
              }
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select> */}
            <button onClick={handleTheme} className="hea-sun-moon">
              <i className={btntheme}></i>
            </button>
          </div>
          <button
            className={`btn-movil hamburger hamburger--spring ${viewMenu}`}
            type="button"
            onClick={handleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </section>
      </header>
    </>
  );
};
export default Menu;
