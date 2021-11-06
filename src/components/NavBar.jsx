import React from "react";
import { NavLink } from "react-router-dom";
import CardWidget from "./CartWidget";
export const NavBar = () =>{

    const categorias = [
        {
            id: 1,
            nombre: "Electrodomésticos",
            url: "/categoria/electro"
        },
        {
            id: 2,
            nombre: "Textil",
            url: "/categoria/textil"
        },
        {
            id: 3,
            nombre: "Bazar",
            url: "/categoria/bazar"
        },
        {
            id: 4,
            nombre: "Hogar",
            url: "/categoria/hogar"
        }
    ];

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Tutti</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/">Inicio</NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    categorias.map(categoria => (
                                        <NavLink className="dropdown-item" to={categoria.url} key={categoria.id}>{categoria.nombre}</NavLink>
                                    ))
                                }
                            </ul>

                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactos" activeClassName="active">Contactos</NavLink>                         
                        </li>

                    </ul>
                    <div className="d-flex">
                        <CardWidget></CardWidget>
                    </div>
                </div>
            </div>
        </nav>
    )
}