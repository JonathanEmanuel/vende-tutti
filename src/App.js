//import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar'

import ItemListContainer from './components/container/ItemListContainer';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer name="Mensaje en el componente Hijo"></ItemListContainer>

      
    </>
  );
}

export default App;
