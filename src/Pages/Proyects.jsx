import { useContext } from "react";
import { Outlet } from "react-router-dom";
import LenguageContext from "../Context/LenguageContext";

const Proyects = () => {
  const { texts } = useContext(LenguageContext);
  return (
    <section className="about conteiner-section">
      <h2 className="title-container title-proyect">{texts.proyectTitle}</h2>
      {/* <nav className="pro-navbar">
        <Link to="/proyectos">{texts.proyectWeb}</Link>
        <Link to="/proyectos/maquetacion">{texts.proyectLayout}</Link>
        <Link to="/proyectos/videogame">{texts.proyectGame}</Link>
      </nav> */}
      <Outlet />
    </section>
  );
};
export default Proyects;
