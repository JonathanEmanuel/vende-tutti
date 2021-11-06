import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/img/logo.png";


export const Header = () => {
    return (

        <div className="header">
            <div className="logo">
                <NavLink  to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className="search">
                <input type="search" placeholder="Buscar" />
            </div>
        </div>
    )

}