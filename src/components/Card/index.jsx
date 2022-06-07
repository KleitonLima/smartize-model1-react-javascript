import "./style.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={`Foto de ${props.model}`} />
      <div>
        <h3>{props.type}</h3>
        <h3>{props.model}</h3>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
};

export default Card;
