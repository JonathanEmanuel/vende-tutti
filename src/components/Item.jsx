import React from "react";
import { Link } from "react-router-dom";
const Item = (props) => {
    return (

        
        <div className="card text-center  col-md-3 m-3">
            <Link to={`/item/${props.id}`}>
                <img src={props.img} className="card-img-top " alt={props.name} />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">${props.price}</p>
                <Link to={`/item/${props.id}`}>
                    <button className="btn btn-primary">Agregar al <i className="fas fa-shopping-cart"></i></button>
                </Link>
            </div>
        </div>
    )
    
}


export default Item