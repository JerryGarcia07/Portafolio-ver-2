import Routerpage from "./Component/Routerpage";
import { LenguageProvider } from "./Context/LenguageContext";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  //agregar habilidades-Listo
  //cambiar la informacion de personal
  //verificar los proyectos
  //cambiar al orden de los proyectos
  // agregar animacion al fondo
  //actualizar la maquetacion los proyectos

  //poner animacion cada vez que habre y cierra los modals
  //implementar  un pagina de carga a las paginas
  return (
    <>
      <ThemeProvider>
        <LenguageProvider>
          <section className="context">
            <Routerpage />
          </section>
          <div className="area">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </LenguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
