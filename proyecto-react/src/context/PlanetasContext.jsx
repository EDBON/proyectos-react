import { createContext, useState, useEffect, useContext } from "react";

const PlanetasContext = createContext();

export default function PlanetasProvider({ children }) {
  const [planetas, setPlanetas] = useState([]);

  const getPlanetas = async () => {
    try {
      const response = await fetch('https://www.swapi.tech/api/planets');
      const data = await response.json();
      setPlanetas(data.results); // 'results' contiene el array de planetas
    } catch (error) {
      console.error("Error al obtener los planetas:", error);
    }
  };

  useEffect(() => {
    getPlanetas();
  }, []);

  return (
    <PlanetasContext.Provider value={{ planetas }}>
      {children}
    </PlanetasContext.Provider>
  );
}

export const usePlanetas = () => useContext(PlanetasContext);
