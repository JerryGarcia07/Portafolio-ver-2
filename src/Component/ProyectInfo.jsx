/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./Modal.css";
import LenguageContext from "../Context/LenguageContext";

const ProyectInfo = ({ cardContent }) => {
  const [imgProyect, setImgProyect] = useState(cardContent.ListImg.lapto);
  const { texts } = useContext(LenguageContext);

  const handleBtnImge = (imgurl) => {
    setImgProyect(imgurl);
  };

  return (
    <>
      <article className="modal-modal">
        <div className="modal-img-options">
          <div className="Modal-img">
            <img src={imgProyect} alt="Imagen del Proyecto" />
          </div>
          <div className="modal-btn-list">
            <button
              onClick={() => handleBtnImge(cardContent.ListImg.lapto)}
              className={`btn-plata ${
                cardContent.ListImg.lapto === imgProyect
                  ? "btn-select-platfor"
                  : ""
              }`}
            >
              <i className="bi bi-laptop"></i>
              {/* <img src={portatil} alt="Laptop" /> */}
            </button>
            <button
              onClick={() => handleBtnImge(cardContent.ListImg.tablet)}
              className={`btn-plata  ${
                cardContent.ListImg.tablet === imgProyect
                  ? "btn-select-platfor"
                  : ""
              }`}
            >
              <i className="bi bi-tablet"></i>
              {/* <img src={tableta} alt="Tableta" /> */}
            </button>
            <button
              onClick={() => handleBtnImge(cardContent.ListImg.celular)}
              className={`btn-plata ${
                cardContent.ListImg.celular === imgProyect
                  ? "btn-select-platfor"
                  : ""
              }`}
            >
              <i className="bi bi-phone"></i>
              {/* <img src={telefono} alt="Tableta" /> */}
            </button>
          </div>
        </div>
        <div className="Modal-info">
          <h2>{cardContent.nombre}</h2>
          <p>{cardContent.descripcion}</p>
          <div className="modal-tecnologia">
            <h3>{texts.technoligi}:</h3>
            <ul className="modal-list-tecn">
              {cardContent.tecnologia.map((el, id) => (
                <li key={id}>{el}</li>
              ))}
            </ul>
          </div>
          <div className="Modal-List-btn">
            <a href={cardContent.link} target="_blank" rel="noreferrer">
              {texts.viewWeb}
            </a>
            <a href={cardContent.github} target="_blank" rel="noreferrer">
              {texts.viewgit}
            </a>
          </div>
        </div>
      </article>
    </>
  );
};
export default ProyectInfo;
