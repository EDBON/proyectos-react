import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Header.css'

export default function Header(){
    return(
        <div>
            <h1 className="title-header">Este es el encabezado de la pagina</h1>
            <div className="nav-btn">
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'Fotos'}>Fotos</Link></li>
                    </ul>
                <Outlet />
                </nav>
            </div>
        </div>
    )
}