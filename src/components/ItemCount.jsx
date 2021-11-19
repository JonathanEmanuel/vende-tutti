import React, {useState} from "react";

const ItemCount = (props) => {
    const [stock, setStock] = useState(props.stock);
    const [unidades, setUnidades] = useState(0);

    const handleStock = {
        sumar: () => {
            if (stock > 0) {
                setStock(stock - 1);
                setUnidades(unidades + 1);
            }
        },
        restar: () => {
            if (unidades > 0) {
                setStock(stock + 1);
                setUnidades(unidades - 1);
            }
        }
    }


    return (
        <div>
            <p>Stock disponible: {stock}</p>
            <button className="btn btn-sm btn-info m-2" onClick={handleStock.sumar} >+</button>
            <span className="badge bg-success p-2">{unidades}</span>
            <button className="btn btn-sm btn-info m-2" onClick={handleStock.restar} >-</button>

            <button className="btn btn-sm btn-primary" onClick={ () => props.onAdd({unidades})} >Agregar al Carrito <i className="fas fa-shopping-cart"></i></button>
        </div>
    );
}

export default ItemCount;