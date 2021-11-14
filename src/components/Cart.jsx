import React, {useContext} from "react";
import { Context } from "./CartContext";

export const Cart = () => {
    const {cart, total} = useContext(Context);

    return (
        <p>El total del carrito es {total}</p>
    )
}
