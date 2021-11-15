import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { Context } from './CartContext';


export const ItemDetail = ({ id, name, img, price, stock, description }) => {

  const [comprar, setComprar] = useState(false);
  const {addToCart} = useContext(Context);

  const agregar = (props) => {
    setComprar(true);
    addToCart({id, name, price}, props.unidades);
    console.log('Producto agregado al carrito ' + props.unidades);
  }

  return !id ? (
    <h1>El Producto no existe</h1>
  ) : (
    <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <img src={img} alt={name} className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h1>{name}</h1>
                    <p>Precio: ${price}</p>
                    <p>{description}</p>
                    <p>Stock disponible: {stock}</p>
                    { !comprar ?  <ItemCount stock={stock} onAdd={agregar}/> : <Link to='/cart'> <button className="btn btn-success">Finalizar Compra </button> </Link>}
                    
                </div>
            </div>
        </div>

    </>
  );
};
