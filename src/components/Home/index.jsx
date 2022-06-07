import Card from "../Card";
import "./style.css";
import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  return (
    <main>
      <div id="productResearched">
        <h2>Produto(s) encontrado(s):</h2>
      </div>
      <div id="allProducts">
        <h2>Produtos disponíveis:</h2>
      </div>
      <div className="card-container">
        <Card image="https://gafashop.com.br/product_images/x/432/2__59144_std.png" type="Smartphone" model="S10 Plus, 128GB, 8GB RAM" price="R$1599,00" />
        <Card image="https://imgs.casasbahia.com.br/55026069/1xg.jpg" type="Caixa de som" model="Mondial CM-550" price="R$499,90" />
        <Card image="https://m.media-amazon.com/images/I/61kFL7ywsZS._AC_SX679_.jpg" type="Fone de ouvido" model="JBL Tune 510BT Pure Bass" price="159,90" />
      </div>
    </main>
  );
};

export default Home;
