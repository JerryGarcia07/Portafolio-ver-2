/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import LenguageContext from "../Context/LenguageContext";
import HistoryEduComponent from "../Component/historyEduComponent";
import img02 from "../assets/pexels-anna-shvets-3987020.webp";

const History = () => {
  const [viewImg, setViewImg] = useState(true);
  const { texts } = useContext(LenguageContext);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1020px)");
    if (mediaQuery.matches) {
      setViewImg(true);
    } else {
      setViewImg(false);
    }
  }, [viewImg]);

  return (
    <section className="about histo-container conteiner-section">
      <h2 className="title-container">{texts.formaTitle}</h2>
      <section>
        <div className="his-work">
          <div className="work-img">
            {viewImg && <img src={img02} alt="Computo02" />}
          </div>
          <div className="work-info his-info">
            <p className="chakra-petch-medium-italic">
              Soy egresado de la carrera de Ingeniería de Sistemas de la
              Universidad César Vallejo (UCV). Durante el último año, he
              enfocado mi formación en el desarrollo web, especializándome en el{" "}
              <span>Front-end</span>. Cuento con experiencia profesional gracias
              a mis prácticas en la Universidad Señor de Sipán (USS) y en la
              tienda Ocassione. Me considero una persona perseverante,
              comprometida y creativa, con habilidades para trabajar en equipo y
              comunicarme de manera efectiva. Estas competencias me han
              permitido colaborar exitosamente con otros equipos. Además, poseo
              un fuerte deseo de superación y aprendizaje continuo.
            </p>
            <div className="formacion-info his-info">
              <h3>{texts.formaSubtitle01}</h3>
              {texts.formList01.map((el) => (
                <HistoryEduComponent key={el.id} carrera={el} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default History;
