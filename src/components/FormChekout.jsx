import React, { useState, useContext} from "react";
import { Context } from "./CartContext";
import {  Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../libs/firebaseConfig'


export const FormCheckout = () => {
    const [state, setState] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: ""
    });

    const {cart, unidades, total, clearCart } = useContext(Context);
    
    const handleChange = e => {
        setState({
        ...state,
        [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(state);
        buyProducts();
        setState({
            name: "",
            lastname: "",
            email: "",
            phone: ""
        });

    };

    // Creacion de una nueva orden
    const buyProducts = async () => {

        try {

            const orders = collection(db, 'orders');
            const { name, lastname, email, phone } = state;
            const order = {
                buyer: {
                    name,
                    lastname,
                    email,
                    phone
                },
                date: new Date().toLocaleDateString(),
                products: cart,
                total: total,
                unidades: unidades,
                status: 'pending'
            }

            console.log(order);
            const docRef = await addDoc(orders, order);
            setState({
                name: "",
                lastname: "",
                email: "",
                phone: ""
            });
            clearCart();
            console.log(docRef.id);
        } catch (error) {
            console.log(error);
        }




        
    }

    
    return (
        <Context.Consumer>
        {context => (
            <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <div className="form-group m-2">
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-control"
                id="name"name="name"
                value={state.name}
                onChange={handleChange}
                />
            </div>
            <div className="form-group m-2">
                <label htmlFor="lastname">Apellido</label>
                <input type="text" className="form-control"
                id="lastname" name="lastname"
                value={state.lastname} onChange={handleChange}
                />
            </div>
            <div className="form-group m-2">
                <label htmlFor="phone">Teléfono</label>
                <input type="text"  className="form-control" id="phone" name="phone" value={state.phone} onChange={handleChange} />
            </div>
            <div className="form-group m-2">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                className="form-control"
                id="email"
                name="email"

                value={state.email}
                onChange={handleChange}
                />
            </div>
            <Link to='/cart'> <button className="btn btn-warning"><i class="far fa-caret-square-left"></i> Regresar al Carrito</button> </Link>


            <button type="submit" className="btn btn-success"> Finalizar Compra <i class="far fa-caret-square-right"></i></button>
            </form>
        )}
        </Context.Consumer>
    );
};
