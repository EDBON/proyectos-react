import react from "react";
import { Link, Outlet } from "react-router-dom";

export default function Perfil(){
    return(
        <div>
            <h1>Bienvenido al perfil</h1>
            <nav>
                <ul>
                    <li><Link to={'Usuario'}>Usuario</Link></li>
                    <li><Link to={'Settings'}>Settings</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}