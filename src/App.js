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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div style={styles.typesContainer}>
          <FunctionalComponent
          nombre={personaFuncion.nombre}
          apellido={personaFuncion.apellido}
          children={<img src={logo} className="App-logo" alt="logo" />} 
        />
        </div>
        <p style={styles.title} o>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
