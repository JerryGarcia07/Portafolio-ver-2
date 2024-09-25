/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import LenguageContext from "../Context/LenguageContext";
import HistoryEduComponent from "../Component/historyEduComponent";
import HistoryWorComponent from "../Component/historyWorComponent";
import img01 from "../assets/pexels-flo-dahm-699459.webp";
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
            <h3>{texts.formaSubtitle02}</h3>
            {texts.formList02.map((el) => (
              <HistoryWorComponent
                key={el.id}
                work={el}
                tecnologia={texts.technoligi}
                rol={texts.rol}
              />
            ))}
          </div>
        </div>
        <div className="his-formacion">
          <div className="formacion-img">
            {viewImg && <img src={img01} alt="Computo01" />}
          </div>
          <div className="formacion-info his-info">
            <h3>{texts.formaSubtitle01}</h3>
            {texts.formList01.map((el) => (
              <HistoryEduComponent key={el.id} carrera={el} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
export default History;
