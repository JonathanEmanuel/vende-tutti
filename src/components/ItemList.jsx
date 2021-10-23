import React from "react";
import Item from './Item';

const ItemList = ( {productos}) => {
    
    return(
        <div className="row">
            {productos.map( (producto) => {
               return <Item key={producto.id} name={producto.name} price={producto.name} img={producto.img} />
                    
            })}
        </div>
    )
}


export default ItemList