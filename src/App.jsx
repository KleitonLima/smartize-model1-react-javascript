import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3001/produtos/listar-produtos");

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
