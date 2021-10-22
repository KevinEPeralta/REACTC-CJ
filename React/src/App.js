import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo = 'Desafío 1 de coder' />
    </div>
  );
}

export default App;
