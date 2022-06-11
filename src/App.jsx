import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="app-container">
      <Toaster />
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
