import { useContext } from "react";
import LenguageContext from "../Context/LenguageContext";

const Encabezado = () => {
  const { texts } = useContext(LenguageContext);
  return (
    <footer className="footer chakra-petch-medium-italic">
      <span>{texts.footer}</span>
    </footer>
  );
};
export default Encabezado;
