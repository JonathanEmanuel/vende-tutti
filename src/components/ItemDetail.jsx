import React from 'react';

export const ItemDetail = ({ id, name, img, price, description }) => {
  return !id ? (
    <h1>El Producto no existe</h1>
  ) : (
    <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <img src={img} alt={name} className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h1>{name}</h1>
                    <p>Precio: ${price}</p>
                    <p>{description}</p>
                    <button className="btn btn-primary">Agregar al <i className="fas fa-shopping-cart"></i></button>
                </div>
            </div>
        </div>

    </>
  );
};
