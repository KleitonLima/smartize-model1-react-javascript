import Card from "../Card";
import "./style.css";
import { useState } from "react";

const Home = ({ products, getProducts }) => {
  const [filterInput, setFilterInput] = useState([]);

  return (
    <main>
      <div>
        <div className="inputFilter">
          <input onChange={(event) => setFilterInput(event.target.value)} type="text" placeholder="Digite o tipo do produto" />
          {/* <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button> */}
        </div>
        {/* <div id="productResearched">
          <h2>Produto(s) encontrado(s):</h2>
        </div> */}
      </div>
      <div>
        <h2>Produtos disponíveis:</h2>
      </div>
      <div id="allProducts">
        <div className="card-container">
          {filterInput
            ? products
                .filter((element) => element.tipo.toLowerCase().includes(filterInput))
                .map((element) => {
                  return <Card getProducts={getProducts} key={element._id} products={element} />;
                })
            : products.map((element) => {
                return <Card getProducts={getProducts} key={element._id} products={element} />;
              })}
        </div>
      </div>
    </main>
  );
};

export default Home;
