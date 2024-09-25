/* eslint-disable react/prop-types */

const HistoryWorComponent = ({ work, tecnologia, rol }) => {
  return (
    <>
      <article className="panel-history-work">
        <h4>{work.trabajo}</h4>
        <h5>{work.empresa}</h5>
        <p>
          <span>{rol + `: `}</span>
          {work.area}
        </p>
        <p>
          <span>{tecnologia + `: `}</span>
          {work.tecno}
        </p>
      </article>
    </>
  );
};
export default HistoryWorComponent;
