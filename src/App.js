import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarj from './components/NavBar/NavBarj';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const onAdd = (cont) => {
    console.log(cont)
  }
  return (
    <>
    <NavBarj />
    <ItemListContainer />
    <ItemCount stock={5} initial={1} onAdd = {onAdd}/>
    <ItemDetailContainer />
    </>
  );
}

export default App;
