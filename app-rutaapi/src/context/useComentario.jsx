 import { createContext, useState, useEffect, useContext} from "react";

const ComentariosContext = createContext()

 export default function ComentariosProvider({children}){
    const [posts, setPosts]=useState([])

    const getPosts = async()=>{
    const response = await fetch ('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json();
    console.log(data);
    setPosts(data);
}

useEffect(()=>{
  getPosts()
},[])

    return(
        <ComentariosContext.Provider value={{ posts }}>
            {children}
        </ComentariosContext.Provider>
    )
 }

 export const useComentarios = () => useContext(ComentariosContext)