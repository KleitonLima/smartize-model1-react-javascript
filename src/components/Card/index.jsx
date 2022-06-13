import { useState } from "react";
import MoldaDeleteProduct from "../Modals/ModalDeleteProduct";
import "./style.css";

const Card = ({ products }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  return (
    <>
      <div className="card">
        <img src={products.foto} alt={`Foto de ${products.modelo}`} />
        <div className="cardInfos">
          <h3>{products.tipo}</h3>
          <h3>{products.marca}</h3>
          <h3>{products.modelo}</h3>
          <h3>{products.condicao}</h3>
          <h2>{`R$${products.preco.toFixed(2)}`}</h2>
          <div>
            <i id="cart-icon" className="fa-solid fa-cart-plus"></i>
            <i className="fa-solid fa-pen-to-square"></i>
            <i onClick={() => setShowModalDelete(!showModalDelete)} id="trash-icon" className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
      {showModalDelete && <MoldaDeleteProduct />}
    </>
  );
};

export default Card;
