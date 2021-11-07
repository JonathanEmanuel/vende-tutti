import React from "react";
import Item from './Item';

const ItemList = ( {productos}) => {
    
    return(
        <div className="container">
            <div className="row">
                {productos.map( (producto) => {
                return <Item key={producto.id} name={producto.name} price={producto.price.toLocaleString()} img={producto.img} id={producto.id} />
                        
                })}
            </div>
        </div>
    )
}


export default ItemList