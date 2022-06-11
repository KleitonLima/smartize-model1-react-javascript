import Card from "../Card";
import "./style.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [filterInput, setFilterInput] = useState([]);
  
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await fetch("http://localhost:3001/produtos/listar-produtos");
    const productsList = await res.json();

    setProducts(productsList);
  };
  useEffect(() => {
    getProducts();
  }, []);

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
                .filter((element) => element.tipo.includes(filterInput))
                .map((element) => {
                  return <Card key={element._id} products={element} />;
                })
            : products.map((element) => {
                return <Card key={element._id} products={element} />;
              })}
        </div>
      </div>
    </main>
  );
};

export default Home;
