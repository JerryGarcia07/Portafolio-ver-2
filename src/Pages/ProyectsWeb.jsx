import LenguageContext from "../Context/LenguageContext";
import ModalProyects from "../Component/ModalProyects.jsx";
import MainProyect from "../Component/MainProyects.jsx";
import { memo, useContext } from "react";

const ProyectWeb = () => {
  const { texts } = useContext(LenguageContext);
  const { proWeb } = useContext(LenguageContext);
  return (
    <section className="about conteiner-section">
      <h2 className="title-container title-proyect bangers-regular">
        {texts.proyectTitle}
      </h2>
      <MainProyect proWeb={proWeb}></MainProyect>
      <div className="Proyect-container">
        {proWeb.map((el) => {
          if (!el.main) return <ModalProyects key={el.id} cardContent={el} />;
        })}
      </div>
    </section>
  );
};
export default memo(ProyectWeb);
