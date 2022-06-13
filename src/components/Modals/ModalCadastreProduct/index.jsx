import "./style.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ModalCadastreProduct = ({ closeModal, getProducts }) => {
  const [tipo, setTipo] = useState(""),
    [marca, setMarca] = useState(""),
    [modelo, setModelo] = useState(""),
    [descricao, setDescricao] = useState(""),
    [cor, setCor] = useState(""),
    [condicao, setCondicao] = useState(""),
    [foto, setFoto] = useState(""),
    [preco, setPreco] = useState(""),
    [garantia, setGarantia] = useState("");

  const handleCadastreProduct = async () => {
    const newProduct = {
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

    const res = await axios.post("http://localhost:3001/produtos/criar-produto", newProduct);

    // res.status !== 201 ? toast.success("Produto cadastrado!") : toast.error("Falha no cadastro!");
    if (res.status !== 201) {
      return toast.error("Falha no cadastro!");
    }

    closeModal();
    getProducts();
    toast.success("Produto cadastrado!");
    return newProduct;
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Cadastro de novo produto</h2>
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
            <button onClick={handleCadastreProduct}>Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCadastreProduct;
