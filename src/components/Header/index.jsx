import logo from "../../assets/images/logo.png";
import "./style.css";

const Header = () => {
  return (
    <header>
      <img src={logo} width="150px" alt="Logo Smartize" />
      {/* <div>
        <input type="text" placeholder="Digite o tipo do produto" />
        <button>O</button>
      </div> */}
      <i className="fa-solid fa-bag-shopping"></i>
    </header>
  );
};

export default Header;
