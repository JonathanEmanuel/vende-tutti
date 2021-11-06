//import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/container/ItemListContainer';
import { Header } from './components/Header';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<ItemListContainer 
            name="Mensaje en el componente Hijo"/>} 
          />
          <Route 
            path='/categorias/:categoriaId' 
            element={<h1>categorias</h1>}
          />

          <Route 
            path='/contactos' 
            element={<h1>contactos</h1>}
          />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
