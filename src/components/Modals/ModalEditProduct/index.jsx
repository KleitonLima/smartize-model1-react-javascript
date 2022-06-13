import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const ModalEditProduct = ({ products, getProducts, closeModal }) => {
  const [tipo, setTipo] = useState(products.tipo),
    [marca, setMarca] = useState(products.marca),
    [modelo, setModelo] = useState(products.modelo),
    [descricao, setDescricao] = useState(products.descricao),
    [cor, setCor] = useState(products.cor),
    [condicao, setCondicao] = useState(products.condicao),
    [foto, setFoto] = useState(products.foto),
    [preco, setPreco] = useState(products.preco),
    [garantia, setGarantia] = useState(products.garantia);

  const handleEditProduct = async () => {
    const editedProduct = {
      tipo,
      marca,
      modelo,
      descricao,
      cor,
      condicao,
      foto,
      preco,
      garantia,
    };

    const res = await axios.put(`http://localhost:3001/produtos/atualizar-produto/${products._id}`, editedProduct);

    if (res.status !== 200) {
      return toast.error("Falha na edição!");
    }

    closeModal();
    getProducts();
    toast.success("Produto cadastrado!");
    return editedProduct;
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Edição do produto</h2>
          <i onClick={closeModal} className="fa-solid fa-square-xmark"></i>
        </div>
        <div className="modal-body">
          <input value={tipo} onChange={(event) => setTipo(event.target.value)} name="tipo" placeholder="Digite o tipo do produto..." />
          <input value={marca} onChange={(event) => setMarca(event.target.value)} name="marca" placeholder="Digite a marca..." />
          <input value={modelo} onChange={(event) => setModelo(event.target.value)} name="modelo" placeholder="Digite o modelo..." />
          <textarea value={descricao} onChange={(event) => setDescricao(event.target.value)} name="descricao" placeholder="Digite a descrição..." rows="3" />
          <input value={cor} onChange={(event) => setCor(event.target.value)} name="cor" placeholder="Digite a cor..." />
          <input value={condicao} onChange={(event) => setCondicao(event.target.value)} name="condicao" placeholder="Digite a condição..." />
          <input value={foto} onChange={(event) => setFoto(event.target.value)} name="foto" placeholder="Digite o link da foto..." type="url" />
          <input value={preco} onChange={(event) => setPreco(event.target.value)} name="preco" placeholder="Digite o preço..." type="number" />
          <input value={garantia} onChange={(event) => setGarantia(event.target.value)} name="garantia" placeholder="Digite o tempo de garantia..." />
          <div>
            <button onClick={handleEditProduct}>SALVAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditProduct;
