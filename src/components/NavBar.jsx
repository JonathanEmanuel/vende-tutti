import React from "react";
import { Link } from "react-router-dom";
import CardWidget from "./CartWidget";
export const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="index.html">Tutti</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Inicio</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/categorias/1">Electrodomesticos</Link>
                            <Link className="dropdown-item" to="/categorias/2">Textil</Link>
                            <Link className="dropdown-item" to="/categorias/3">Basar</Link>
                            <Link className="dropdown-item" to="/categorias/4">Hogar</Link>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactos" activeClassName="active">Contactos</Link>                         
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