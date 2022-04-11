import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contacto from "./components/Contacto/Contacto";
import Nosotros from "./components/Nosotros/Nosotros";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";


function App() {
  
  return (
    <CartProvider>

    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={ <ItemListContainer/> }/>
            <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
            <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
            <Route path="/contacto" element={ <Contacto/> }/>
            <Route path="/nosotros" element={ <Nosotros/> }/>
            <Route path="/cart" element={ <Cart/> }/>

            <Route path="*" element={ <Navigate to="/"/> }/>
          </Routes>
        </BrowserRouter>
      
        
      </header>
      
    </div>
    </CartProvider>

    
  );
}


export default App;
