//import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/container/ItemListContainer';
import { Header } from './components/Header';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartContext } from './components/CartContext'
import { Cart } from './components/Cart';
import { Contacto } from './components/Contact';
import { Checkout } from './components/Checkout';

function App() {
  return (
    <> 
      <BrowserRouter>
        <CartContext>
          <Header />
          <NavBar />
          <Routes>
            <Route 
              path="/" 
              element={<ItemListContainer />} 
            />
            <Route 
              path='/categoria/:categoryId' 
              element={<ItemListContainer/>}
            />

            <Route 
              path='/contactos' 
              element={<Contacto/>}
            />
            <Route 
              path='/cart' 
              element={<Cart />}
            />
            <Route
              path='/checkout'
              element={<Checkout />}
            />
            <Route 
              path='*' 
              element={<h1>No se encontro la página</h1>}
            />
            <Route 
              path='/item/:id' 
              element={<ItemDetailContainer />}
            />
          </Routes>
        </CartContext>
      </BrowserRouter>
      
    </>
  );
}

export default App;
