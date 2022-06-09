import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarj from './components/NavBar/NavBarj';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
    <NavBarj/>
    <ItemListContainer/>
    {/* <ItemCount stock={5} initial={1}/> */}
    </>
  );
}

export default App;
