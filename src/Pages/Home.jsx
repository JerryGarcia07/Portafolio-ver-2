import { useContext } from "react";
import LenguageContext from "../Context/LenguageContext";
import foto from "../assets/foto.webp";
import pdf from "../assets/Garcia Tanta Jerry Anthony(CV).pdf";

const Home = () => {
  const { texts } = useContext(LenguageContext);
  return (
    <>
      <section className="about home-container">
        <div className="home-info">
          <h2>{texts.homeTitle}</h2>
          <h3 className="home-subTitle">
            {texts.homeSubTitle} <span>{texts.homeSubTitle1}</span>
          </h3>
          <p>{texts.homeContent}</p>
          <div className="home-social">
            <a
              href="https://github.com/PandaAsia"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/garciatantajerryanthony/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
          <a
            className="home-btn-dow"
            href={pdf}
            target="_blank"
            rel="noreferrer"
          >
            {texts.homebutton}
          </a>
        </div>
        <div className="home-photo">
          <img src={foto} alt="Photo jerry" />
        </div>
      </section>
    </>
  );
};
export default Home;
