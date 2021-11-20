import React, {useContext} from "react";
import { Context } from "./CartContext";
import { NavLink } from "react-router-dom";


export default function CardWidget(){
    const { unidades } = useContext(Context);

    return(
        
        <NavLink to='/cart'>
                { unidades > 0 ? (
                    <button className="btn btn-outline-info" type="button">
                        <span className="fa-layers fa-fw">
                        <i className="fas fa-shopping-cart"></i>  <span className="fa-layers-counter" >{unidades}</span>
                        </span>
                    </button>

                )  : null 
                }

        </NavLink>
    )
}