import "./style.css";
import { toast } from "react-hot-toast";
import axios from "axios";

const MoldaDeleteProduct = ({ closeModal, products, getProducts }) => {
  const handleDeleteProduct = async () => {
    const res = await axios.delete(`http://localhost:3001/produtos/deletar-produto/${products._id}`);

    if (res.status !== 200) {
      return toast.error("Falha em deletar o produto!");
    }

    closeModal();
    toast.success("Produto deletado com sucesso!");
    getProducts();
  };

  return (
    <div className="modal-background">
      <div className="modalDelete-container">
        <div className="modalDelete-header">
          <h2>Deseja excluir o produto {products.modelo}?</h2>
        </div>
        <div className="modalDelete-actions">
          <button onClick={handleDeleteProduct}>SIM</button>
          <button onClick={closeModal}>NÃO</button>
        </div>
      </div>
    </div>
  );
};

export default MoldaDeleteProduct;
