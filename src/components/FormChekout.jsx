import React, { useState, useContext} from "react";
import { Context } from "./CartContext";
import {  Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../libs/firebaseConfig'
import Swal from 'sweetalert2'

export const FormCheckout = () => {
    const [state, setState] = useState({
        name: "",
        lastname: "",
        email1: "",
        email2: "",
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
        //console.log(state);
        buyProducts();
        setState({
            name: "",
            lastname: "",
            email1: "",
            email2: "",
            phone: ""
        });

    };

    // Creacion de una nueva orden
    const buyProducts = async () => {
        const { name, lastname, email1, email2, phone } = state;
        if( name === "" || lastname === "" || email1 === "" || email2 === "" || phone === "" ){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
            })
            return;
        }
        if( email1 !== email2 ){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Las direcciones de correo no coinciden',
            })
            return;
        }

        try {

            const orders = collection(db, 'orders');

            const order = {
                buyer: {
                    name,
                    lastname,
                    email: email1,
                    phone
                },
                date: new Date().toLocaleDateString(),
                products: cart,
                total: total,
                unidades: unidades,
                status: 'pending'
            }

            //console.log(order);
            const docRef = await addDoc(orders, order);
            setState({
                name: "",
                lastname: "",
                email1: "",
                email2: "",
                phone: ""
            });
            clearCart();

            Swal.fire({
                title: '¡Gracias por su Compra!',
                text: 'Código de orden: ' + docRef.id,
                icon: 'success',
                confirmButtonText: 'Cerrar'
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal, intente de nuevo',
            })
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
                <label htmlFor="email1">Email</label>
                <input
                type="email"
                className="form-control"
                id="email1"
                name="email1"

                value={state.email1}
                onChange={handleChange}
                />
            </div>
            <div className="form-group m-2">
                <label htmlFor="email2">Confirme el Email</label>
                <input
                type="email2"
                className="form-control"
                id="email2"
                name="email2"

                value={state.email2}
                onChange={handleChange}
                />
            </div>
            <Link to='/cart'> <button className="btn btn-warning"><i className="far fa-caret-square-left"></i> Regresar al Carrito</button> </Link>


            <button type="submit" className="btn btn-success"> Finalizar Compra <i className="far fa-caret-square-right"></i></button>
            </form>
        )}
        </Context.Consumer>
    );
};
