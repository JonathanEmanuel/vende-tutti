import React from "react";
import logo from "../../src/assets/img/logo.png";


export const Header = () => {
    return (

        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="search">
                <input type="search" placeholder="Buscar" />

            </div>
        </div>
    )

}