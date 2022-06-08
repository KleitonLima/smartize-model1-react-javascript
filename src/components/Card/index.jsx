import "./style.css";

const Card = ({ products }) => {
  return (
    <div className="card">
      <img src={products.foto} alt={`Foto de ${products.model}`} />
      <div>
        <h3>{products.tipo}</h3>
        <h3>{products.marca}</h3>
        <h3>{products.modelo}</h3>
        <h3>{products.condicao}</h3>
        <h2>{`R$${products.preco.toFixed(2)}`}</h2>
      </div>
    </div>
  );
};

export default Card;
