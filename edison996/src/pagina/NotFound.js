import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div>
            <h1>Error 404!... Pagina no encontrada</h1>
            <p>Lo sentimos... esta pagina no fue encontrada</p>
            <Link to={'/'} />
        </div>
    )
}

export default NotFound;