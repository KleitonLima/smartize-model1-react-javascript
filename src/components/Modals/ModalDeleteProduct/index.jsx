import "./style.css";

const MoldaDeleteProduct = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Deseja excluir o produto {product.tipo}?</h2>
        </div>
        <div>
          <button onClick={() => {}}>SIM</button>
          <button>NÃO</button>
        </div>
      </div>
    </div>
  );
};

export default MoldaDeleteProduct;
