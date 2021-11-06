//import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/container/ItemListContainer';
import { Header } from './components/Header';
import { ItemDetailContainer } from './components/ItemDetailContainer';
  
function App() {
  return (
    <> 
      <BrowserRouter>
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
            element={<h1>contactos</h1>}
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
      </BrowserRouter>
      
    </>
  );
}

export default App;
