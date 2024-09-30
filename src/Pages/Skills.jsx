import { useContext } from "react";
import LenguageContext from "../Context/LenguageContext";
import ThemeContext from "../Context/ThemeContext";

const Skills = () => {
  const { texts } = useContext(LenguageContext);
  const { viewResponse } = useContext(ThemeContext);

  return (
    <section className="about conteiner-section">
      <h2 className="title-container bangers-regular">{texts.skillTitle}</h2>
      <article className="hab-container">
        <div className="hab-conte">
          <h3>Dominadas</h3>
          <div className="hab-dom">
            <div className="logo-cvg">
              <i className="bx bxl-html5"></i>
              <h5>Html</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-css3"></i>
              <h5>Css</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-javascript"></i>
              <h5>Javascript</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-react"></i>
              <h5>React</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-tailwind-css"></i>
              <h5>Tailwind</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-figma"></i>
              <h5>Figma</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-markdown"></i>
              <h5>Markdown</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-git"></i>
              <h5>Git</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-github"></i>
              <h5>Github</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-visual-studio"></i>
              <h5>VS code</h5>
            </div>
            <div className="logo-cvg">
              <i className="bx bxl-adobe"></i>
              <h5>Adobe</h5>
            </div>
            <div className="logo-cvg">
              <div className="habl-container">
                <img src={viewResponse} alt="Responsibe" />
              </div>
              <h5>Responsivo</h5>
            </div>
          </div>
        </div>
        <div className="hab-container hab-container-2">
          <div className="hab-conte hab-conte-tm">
            <h3>Aprendiendo</h3>
            <div className="hab-dom">
              <div className="logo-cvg">
                <i className="bx bxl-typescript"></i>
                <h5>Typescript</h5>
              </div>
              <div className="logo-cvg">
                <i className="bx bxl-nodejs"></i>
                <h5>Nodejs</h5>
              </div>
              <div className="logo-cvg">
                <i className="bx bxs-data"></i>
                <h5>Base de Datos</h5>
              </div>
            </div>
          </div>
          <div className="hab-conte hab-conte-tm">
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
              <div className="logo-cvg">
                <i className="bx bxl-php"></i>
                <h5>PHP</h5>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Skills;
