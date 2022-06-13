import Card from "../Card";
import "./style.css";
import { useState } from "react";
import ReactLoading from "react-loading";

const Home = ({ products, getProducts }) => {
  const [filterInput, setFilterInput] = useState([]);

  return (
    <main>
      <div>
        <div className="inputFilter">
          <input onChange={(event) => setFilterInput(event.target.value)} type="text" placeholder="Digite o tipo do produto" />
        </div>
      </div>
      <div>
        <h2>Produtos disponíveis:</h2>
      </div>
      {products.length === 0 ? (
        <ReactLoading type="cylon" color="#5a76fa" />
      ) : (
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
      )}
    </main>
  );
};

export default Home;
