import React from "react";
import { NavLink } from "react-router-dom";



export default function CardWidget(){
    return(
        <NavLink to='/cart'>
            <button className="btn btn-outline-info" type="button"><i className="fas fa-shopping-cart"></i></button>
        </NavLink>
    )
}