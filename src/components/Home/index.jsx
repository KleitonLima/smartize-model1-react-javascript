import Card from "../Card";
import "./style.css";

const Home = () => {
  return (
    <main>
      <div id="productResearched">
        <h2>Produto(s) encontrado(s)</h2>
      </div>
      <div id="allProducts">
        <h1>Produtos disponíveis</h1>
      </div>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Home;
