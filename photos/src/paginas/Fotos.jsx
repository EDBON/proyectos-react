import React, { useEffect, useState } from "react";
import './style/Fotos.css'; // si está en carpeta "styles"


export default function Fotos(){
    const [fotos, setFotos] = useState([]);
    
    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setFotos(data.results)
        })
    }, [])
  return (
    <div className="photo-container">
      <h2>Galería de Fotos</h2>
      <div className="photo-grid">
        {fotos.map(foto => (
          <div key={foto.id} className="photo-card">
            <img src={foto.image} alt={foto.name} />
            <p>{foto.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
