import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import FunctionalComponent from './components/Functional';

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

const personaFuncion = {
  nombre:'Ivan',
  apellido:'Molina',
};

const listProduct = [
  {
    nombre: "Charizard",
    stock:1,
    initial:2500
  },
  {
    nombre: "Blastoise",
    stock:2,
    initial:2000
  },
  {
    nombre: "Venasaur",
    stock:3,
    initial:1200
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
        <div style={styles.typesContainer}>
          {listProduct.map((producto) => (
              <FunctionalComponent
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
