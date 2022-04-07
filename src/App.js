import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/Navbar';
import ItemCount from './components/Functional';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contacto from "./components/Contacto/Contacto";
import Nosotros from "./components/Nosotros/Nosotros";
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';

let booleanTst = true;

const color = booleanTst ? 'pink' : 'blue';

const styles = {
  title: {
    backgroundColor: color,
  },
  typesContainer: {
  display:'flex',
  flexDirection:'column',
  },
};

 const listProduct = [
   {
   nombre: "Charizard",
   stock:10,
   initial:1
},
 {
   nombre: "Blastoise",
   stock:20,
   initial:1
},
   {
     nombre: "Venasaur",
     stock:30,
    initial:1
   },

  {
    nombre: "Bulbasaur",
   stock:20,
    initial:1
 },

];

 const stock = 10;
const initial=1;
const onAdd = (contador) =>{
    console.log('click' , contador);
};

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
      
        <div style={styles.typesContainer}>
          {listProduct.map((producto) => (
              <ItemCount
              stock={producto.stock}
              initial={producto.initial}
              onAdd={onAdd}
              />

              ))}

        </div>
      </header>
      
    </div>
    </CartProvider>

    
  );
}


export default App;
