import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PlanetaDetalle() {
  const { id } = useParams();
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    const getDetallePlaneta = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
        const data = await response.json();
        setDetalle(data.result.properties);
      } catch (error) {
        console.error("Error al obtener detalles del planeta:", error);
      }
    };
    getDetallePlaneta();
  }, [id]);

  return (
    <div>
      <h1>Detalles del Planeta</h1>
      {detalle ? (
        <div>
          <h2>Nombre: {detalle.name}</h2>
          <h2>Clima: {detalle.climate}</h2>
          <h2>Terreno: {detalle.terrain}</h2>
          <h2>Población: {detalle.population}</h2>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
}
