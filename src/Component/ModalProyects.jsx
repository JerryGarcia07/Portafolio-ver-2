/* eslint-disable react/prop-types */
import { useModal } from "../hooks/useModal";
import ModalProyect from "./ModalProyect";
import "./Modal.css";
import ProyectInfo from "./ProyectInfo";

const ModalProyects = ({ cardContent }) => {
  const [isOpenModal, openModel, closedModel] = useModal(false);

  return (
    <>
      <button onClick={openModel} className="Proyect-btn">
        <div className="img-proyect">
          <img src={cardContent.img} alt="Imagen del Proyecto" />
        </div>
        <div className="litle-proyect">
          <h4>{cardContent.nombre}</h4>
        </div>
      </button>
      <ModalProyect isOpen={isOpenModal} closeModal={closedModel}>
        <ProyectInfo cardContent={cardContent}></ProyectInfo>
      </ModalProyect>
    </>
  );
};
export default ModalProyects;
