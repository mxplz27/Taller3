import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./layout/components/Header";
import Footer from "./layout/components/Footer";
import Content from "./layout/components/Components";

import Articulos from "./Features/auth/components/Articulos";
import Offers from "./Features/articles/components/Offers";
import MiCuenta from "./Features/auth/components/Micuenta";
import Favoritos from "./Features/auth/components/Favoritos";
import MisCompras from "./Features/auth/components/Miscompras";

function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [carrito, setCarrito] = useState([]);


  return (
    <HashRouter>
      <Header
        favoritos={favoritos}
        carrito={carrito}           
        setCarrito={setCarrito}     
      />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/inicio" element={<Content />} />
        <Route
          path="/articulos"
          element={
            <Articulos
              favoritos={favoritos}
              setFavoritos={setFavoritos}
              carrito={carrito}           
              setCarrito={setCarrito}     
            />
          }
        />
        <Route path="/ofertas" element={<Offers />} />
        <Route path="/favoritos" element={<Favoritos favoritos={favoritos} />} />
        <Route path="/micuenta" element={<MiCuenta />} />
        <Route path="/miscompras" element={<MisCompras />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;