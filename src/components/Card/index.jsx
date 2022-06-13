import { useState } from "react";
import MoldaDeleteProduct from "../Modals/ModalDeleteProduct";
import ModalEditProduct from "../Modals/ModalEditProduct";
import "./style.css";
import { toast } from "react-hot-toast";

const Card = ({ products, getProducts }) => {
  const [showModalDelete, setShowModalDelete] = useState(false),
    [showModalEdit, setShowModalEdit] = useState(false);

  const handleShowModalDelete = () => {
    return setShowModalDelete(!showModalDelete);
  };
  const handleShowModalEdit = () => {
    return setShowModalEdit(!showModalEdit);
  };

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
            <i onClick={() => toast.error("Carrinho em desenvolvimento...")} id="cart-icon" className="fa-solid fa-cart-plus"></i>
            <i onClick={handleShowModalEdit} className="fa-solid fa-pen-to-square"></i>
            <i onClick={handleShowModalDelete} id="trash-icon" className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
      {showModalDelete && <MoldaDeleteProduct closeModal={handleShowModalDelete} products={products} getProducts={getProducts} />}
      {showModalEdit && <ModalEditProduct closeModal={handleShowModalEdit} products={products} getProducts={getProducts} />}
    </>
  );
};

export default Card;
