/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import logo from "../assets/Logo_personal.webp";
import logo2 from "../assets/Logo_personal2.webp";
import Responsive from "../assets/icon.svg";
import Responsive2 from "../assets/icon2.svg";

const ThemeContext = createContext();
// const initialIcon = "bx bxs-sun";

const ThemeProvider = ({ children }) => {
  const [btntheme, setBtntheme] = useState(localStorage.getItem("theme"));
  const [viewLogo, setViewLogo] = useState(logo);
  const [viewResponse, setViewResponse] = useState(Responsive);

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "bx bxs-sun");
      setBtntheme(localStorage.getItem("theme"));
    }

    if (localStorage.getItem("theme") === "bx bxs-sun") dark();

    if (localStorage.getItem("theme") === "bx bxs-moon") Light();
  }, []);

  const Light = () => {
    setBtntheme("bx bxs-moon");
    document.documentElement.setAttribute("tema", "light");
    setViewLogo(logo2);
    setViewResponse(Responsive2);
    localStorage.setItem("theme", "bx bxs-moon");
  };

  const dark = () => {
    setBtntheme("bx bxs-sun");
    document.documentElement.setAttribute("tema", "dark");
    localStorage.setItem("theme", "bx bxs-sun");
    setViewLogo(logo);
    setViewResponse(Responsive);
  };

  const handleTheme = () => {
    if (btntheme === "bx bxs-sun") {
      Light();
    } else {
      dark();
    }
  };
  const data = { btntheme, viewLogo, handleTheme, viewResponse };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
