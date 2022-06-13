import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import api from "./api";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await api.get("/produtos/listar-produtos");

    setProducts(res.data);
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
