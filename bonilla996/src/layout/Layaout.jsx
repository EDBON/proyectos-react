import react from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout (){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="Contactos">Contactos</Link></li>
                    <li><Link to="Blog">Blog</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}
