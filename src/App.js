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
import { CartContext} from "./context/CartContext";
import {useState} from "react";
import Cart from './components/Cart/Cart';

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
  
  const [cart,setCart] = useState ([])

  const addItem = (item) => {
    setCart( [...cart,item] )
  }

const isInCart = (id) => {
  return cart.some(prod => prod.id === id)
}

const cartQuantity = () => {
  return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
}

  return (
<CartContext.Provider value={{
  cart,
  addItem,
  isInCart,
  cartQuantity
  }}>


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
    </CartContext.Provider>
  );
}


export default App;
