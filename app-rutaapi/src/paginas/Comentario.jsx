import react, { useEffect, useState } from "react";
import PostCard from "../componentes/postcard/PostCard";
import { Link } from "react-router-dom";
import { useComentarios } from "../context/useComentario";

export default function Comentario(){
const { posts } = useComentarios()

    return(
        <div>
            <h1>Pagina de Comentario</h1>
            {posts && posts.map(post => 
            <ul key={post.id}>
                <li>
                    <Link to={`/comentario/${post.id}`}>
                        <PostCard name={post.name} email={post.email} body={post.body} />
                    </Link>
                </li>
            </ul>)}
        </div>
    )
}
