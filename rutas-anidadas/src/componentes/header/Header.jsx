import react from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <h1>Este es el header</h1>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Perfil'}>Perfil</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}