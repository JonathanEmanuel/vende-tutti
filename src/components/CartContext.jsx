import React,  {useState} from "react";

const Context = React.createContext();
const CartContext = ({children})=>{

    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);
    const [total, setTotal] = useState(0);

    const clearCart = () => {
        setCart([]);
        setUnidades(0);
        setTotal(0);
    }

    const removeItem = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        setUnidades(newCart.length);
        setTotal(newCart.reduce((total, item) => total + item.total, 0));
    }

    const addToCart = (producto, cantidad) =>{
        const productoExiste = cart.find(item => item.id === producto.id);
        
        if(!productoExiste){
            setUnidades(unidades + cantidad);
            setTotal(total + (producto.price * cantidad));
            setCart([...cart, {id: producto.id, name:producto.name, cantidad: cantidad, price: producto.price, total: producto.price * cantidad, img: producto.img}]);
            //console.log(cart);
            //console.log(producto.id, producto.name, cantidad, producto.price,  producto.img);

        }else{
            const cartAux = cart.map(item => {
                if(item.id === producto.id){
                    item.cantidad = item.cantidad + cantidad;
                    item.total = item.price * item.cantidad;
                    setUnidades(unidades + cantidad);
                }
                return item;
                
            });
            setCart(cartAux);
            setTotal(total + (producto.price * cantidad));
        }  
    }

    return <Context.Provider value={{cart, unidades, total, addToCart, clearCart, removeItem}}>
        {children}
    </Context.Provider>
}

export  { CartContext, Context}