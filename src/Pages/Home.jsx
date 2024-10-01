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
          <h1 className="bangers-regular">
            {texts.homeTitle} <span>{texts.homeTitle2}</span>
          </h1>
          <h3 className="home-subTitle chakra-petch-bold-italic">
            {texts.homeSubTitle} <span>{texts.homeSubTitle1}</span>
          </h3>
          <p className="chakra-petch-medium-italic">{texts.homeContent}</p>
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
            className="home-btn-dow chakra-petch-bold-italic"
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
