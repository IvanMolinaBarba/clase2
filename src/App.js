import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/Navbar';
import ItemCount from './components/Functional';
import ItemListContainer from './components/ItemListContainer';

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
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />
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
  );
}
export default App;
