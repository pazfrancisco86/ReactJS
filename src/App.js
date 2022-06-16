import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarj from './components/NavBar/NavBarj';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  const onAdd = (cont) => {
    console.log(cont)
  }
  return (
    <>
    <BrowserRouter>
    <NavBarj />
        <Routes>
            <Route index path='/' element={<ItemListContainer />} />
            <Route index path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path="/detalles/:id" element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    <ItemCount stock={5} initial={1} onAdd = {onAdd}/>
    </BrowserRouter>
    </>
  );
}

export default App;
