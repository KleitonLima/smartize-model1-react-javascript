import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

const App = () => {
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
    <div className="app-container">
      <Toaster />
      <Header getProducts={getProducts} />
      <Home products={products} getProducts={getProducts} />
      <Footer />
    </div>
  );
};

export default App;
