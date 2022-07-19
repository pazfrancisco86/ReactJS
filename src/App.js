import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarj from './components/NavBar/NavBarj';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './contexts/cartContext';
import CartContainer from './containers/CartContainer/CartContainer';

function App() {

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <NavBarj />
        <Routes>
            <Route index path='/' element={<ItemListContainer />} />
            <Route index path='/categoria/:categoryId' element={<ItemListContainer />} />
            <Route path="/detalles/:id" element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
