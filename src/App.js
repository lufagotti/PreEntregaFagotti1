import './App.css';
// import ItemList from './components/ItemList/ItemList';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';

function App() {



  return (
  <div className="App">
    <Navbar />
    <ItemListContainer />
  </div>
  );
}

export default App;
