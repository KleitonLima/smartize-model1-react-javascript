import "./style.css";

const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt={`Foto de ${props}`} />
      <h3>{props.type}</h3>
      <h3>{props.model}</h3>
      <h3>{props.price}</h3>
    </div>
  );
};

export default Card;
