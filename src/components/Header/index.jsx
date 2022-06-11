import "./style.css";
import logo from "../../assets/images/logo.png";
import { toast } from "react-hot-toast";
import ModalCadastreProduct from "../Modals/ModalCadastreProduct";
import { useState } from "react";

const Header = () => {
  const [showModalCadastre, setShowModalCadastre] = useState(false);
  
  const handleShowModalCadastre = () => {
    return setShowModalCadastre(!showModalCadastre);
  };

  return (
    <>
      <header>
        <img src={logo} width="150px" alt="Logo Smartize" />
        {/* <div>
        <input type="text" placeholder="Digite o tipo do produto" />
        <button>O</button>
      </div> */}
        <div>
          <i onClick={() => toast.error("Sacola em desenvolvimento...")} className="fa-solid fa-bag-shopping"></i>
          <i onClick={handleShowModalCadastre} className="fa-solid fa-square-plus"></i>
        </div>
      </header>
      {showModalCadastre && <ModalCadastreProduct closeModal={handleShowModalCadastre} />}
    </>
  );
};

export default Header;
