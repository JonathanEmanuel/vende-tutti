import React from "react";

const Item = (props) => {
    return (

        
        <div className="card col-md-3 m-3">
            <img src={props.img} className="card-img-top" alt={props.name} />
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.price}</p>
            <a href="index.html" className="btn btn-primary">Agregar</a>

            </div>


        </div>
    )
    
}


export default Item