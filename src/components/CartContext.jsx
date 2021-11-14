import React,  {useState} from "react";

const Context = React.createContext();
const CartContext = ({children})=>{

    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);
    const [total, setTotal] = useState(0);

    const addToCart = (producto, cantidad) =>{
        const productoExiste = cart.find(item => item.id === producto.id);
        if(productoExiste){
            setCart([...cart, {id: producto.id, nombre:producto.nombre, cantidad: cantidad, precio: producto.precio, total: producto.precio * cantidad}]);
            setUnidades(unidades + 1);
            setTotal(total + (producto.precio * cantidad));
        }else{
            const cartAux = cart.map(item => {
                if(item.id === producto.id){
                    item.cantidad = item.cantidad + cantidad;
                    item.total = item.precio * item.cantidad;
                }
                return item;
                
            });
            setCart(cartAux);
            setTotal(total + (producto.precio * cantidad));
        }  
    }

    return <Context.Provider value={{cart, unidades, total, addToCart}}>
        {children}
    </Context.Provider>
}

export  { CartContext, Context}