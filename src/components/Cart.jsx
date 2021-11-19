import React, {useContext} from "react";
import { Context } from "./CartContext";

export const Cart = () => {
    const {cart, unidades, total} = useContext(Context);

    return (
        <div>
            <h3>Carrito</h3>
            <p>{unidades} items</p>
            <p>Total: ${total}</p>
            <div className="row">
                <div className="col-md-8">
                    <ul className="list-group">
                        {cart.map(item => ( 
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                <span>{item.name}</span>
                                <span className="badge badge-primary badge-pill">{item.unidades}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}
