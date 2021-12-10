import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { Context } from "./CartContext";
import { FormCheckout } from "./FormChekout";

export const Checkout = () => {
    const {cart, unidades, total} = useContext(Context);

    return (
        <div className="container mt-3">
            <h3> <i className="fas fa-truck"></i> Finalizar compra</h3>
            
            {cart.length === 0 ? (
                <div>
                    <div className="alert alert-primary" role="alert">
                        <p>No hay productos en el carrito</p>
                    </div>
                    
                    <Link to='/'> <button className="btn btn-success">Ir a listado de Productos</button> </Link>
                </div>
            ) : (


            <div className="row">

                <div className="col-md-8">
                    
                        {cart.map(item => ( 
                            <div className="row m-3" key={item.id}>
                                <div className="col-md-4">
                                    <img src={item.img} className="img-thumbnail"  alt={item.name}></img>
                                </div>
                                <div className="col-md-8">
                                    <ul className="list-group">
                                        <li className="list-group-item"><h4>{item.name}</h4></li>
                                        <li className="list-group-item"> $ {item.price} x {item.cantidad}</li>
                                        <li className="list-group-item">Total: $ {item.total}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    
                </div>
                <div className="col-md-4">
                    <h4>{unidades} items</h4>
                    <h3>Total: ${total}</h3>
                    <FormCheckout />                    
                </div>

            </div>
            )}
        </div>

    )
}