/* eslint-disable react/prop-types */
const HistoryEduComponent = ({ carrera }) => {
  return (
    <>
      <article>
        <h4>{carrera.carrera}</h4>
        <p className="his-edu">
          {carrera.lugar} <span>{carrera.fecha}</span>
        </p>
      </article>
    </>
  );
};
export default HistoryEduComponent;
