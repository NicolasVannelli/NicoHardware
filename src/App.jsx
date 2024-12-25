import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";
import './style.css'
import Footer from "./componentes/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}  />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<h2>Error 404</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>  
      <Footer/>    
    </div>
  )
}

export default App