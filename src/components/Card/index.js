import "./style.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="header">
        <img
          src="http://github.com/rafiere.png"
          alt="Imagem do membro do time"
        />
      </div>
      <div className="footer">
        <h4>Rafael</h4>
        <h5>Programador</h5>
      </div>
    </div>
  );
};

export default Card;
