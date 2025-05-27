import react from "react";
import { Link, Outlet } from "react-router-dom";



export default function Header(){
    return(
        <div>
            <h1>Este es el encabezado de la pagina ...</h1>
            <nav>
                <ul>
                    <li><Link to="/">Principal</Link></li>
                    <li><Link to="comentario">Comentarios</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}