/* eslint-disable react/prop-types */

import ProyectInfo from "./ProyectInfo";

const MainProyect = ({ proWeb }) => {
  return (
    <>
      <div className="Proyect-Main">
        {proWeb.map((el, id) => {
          if (el.main) {
            return (
              <article key={id} className="proyect-main-info">
                <ProyectInfo cardContent={el}></ProyectInfo>
              </article>
            );
          }
        })}
      </div>
    </>
  );
};
export default MainProyect;
