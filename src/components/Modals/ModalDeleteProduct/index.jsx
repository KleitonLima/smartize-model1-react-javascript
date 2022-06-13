import "./style.css";

const MoldaDeleteProduct = () => {
  return (
    <div className="modal-background">
      <div className="modalDelete-container">
        <div className="modalDelete-header">
          <h2>Deseja excluir o produto {product.tipo}?</h2>
        </div>
        <div className="modalDelete-actions">
          <button onClick={() => {}}>SIM</button>
          <button>NÃO</button>
        </div>
      </div>
    </div>
  );
};

export default MoldaDeleteProduct;
