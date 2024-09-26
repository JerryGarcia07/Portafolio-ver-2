import { useContext } from "react";
import LenguageContext from "../Context/LenguageContext";
import ThemeContext from "../Context/ThemeContext";

const Skills = () => {
  const { texts } = useContext(LenguageContext);
  const { viewResponse } = useContext(ThemeContext);

  return (
    <section className="about conteiner-section">
      <h2 className="title-container">{texts.skillTitle}</h2>
      <article className="hab-container">
        <div>
          <h3>Dominadas</h3>
          <div className="hab-dom">
            <div className="logo-cvg">
              <i className="bx bxl-html5"></i>
              <h5>HTML</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-css3"></i>
              <h5>CSS</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-javascript"></i>
              <h5>JAVASCRIPT</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-react"></i>
              <h5>REACT</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-tailwind-css"></i>
              <h5>Tailwind</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-figma"></i>
              <h5>FIGMA</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-visual-studio"></i>
              <h5>VS CODE</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-adobe"></i>
              <h5>ADOBE</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-github"></i>
              <h5>GITHUB</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-git"></i>
              <h5>GIT</h5>
            </div>
            <div className="logo-cvg">
              <div className="habl-container">
                <img src={viewResponse} alt="Responsibe" />
              </div>
              <h5>RESPONSIVE</h5>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Aprendiendo</h3>
            <div className="hab-dom">
              <div className="logo-cvg">
                <i className="bx bxl-typescript"></i>
                <h5>Typescript</h5>
              </div>
              <div className="logo-cvg">
                <i className="bx bxl-typescript"></i>
                <h5>Nodejs</h5>
              </div>
            </div>
          </div>
          <div>
            <h3>Exploradas</h3>
            <div className="hab-dom">
              <div className="logo-cvg">
                <i className="bx bxl-bootstrap"></i>
                <h5>Bootstrap</h5>
              </div>
              <div className="logo-cvg">
                <i className="bx bxl-postgresql"></i>
                <h5>Postgresql</h5>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Skills;
