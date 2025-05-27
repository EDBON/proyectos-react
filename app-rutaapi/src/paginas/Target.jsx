import react from "react";
import {useParams} from 'react-router-dom'
import { useComentarios } from "../context/useComentario";

export default function Target(){
    const {id} = useParams()
    const {posts} = useComentarios()

    const comentario = posts.find (c => c.id === parseInt(id)) 

    return(
        <div>
            <h1>Detalles targetas: {id}</h1>
            {comentario ? (
                <div>
                    <h2>Nombre: {comentario.name}</h2>
                    <h2>Email: {comentario.email}</h2>
                    <h2>Comentario: {comentario.body}</h2>
                </div>
            ) : (
                <p>Comentario no encontrado</p>
            ) 
        }
        </div>
    )
}