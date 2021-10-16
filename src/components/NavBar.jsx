import React from "react";
import CardWidget from "./CartWidget";
export const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="index.html">Tutti</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="index.html">Electrodomesticos</a></li>
                            <li><a className="dropdown-item" href="index.html">Textil</a></li>
                            <li><a className="dropdown-item" href="index.html">Basar</a></li>
                            <li><a className="dropdown-item" href="index.html">Hogar</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Contactos</a>
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