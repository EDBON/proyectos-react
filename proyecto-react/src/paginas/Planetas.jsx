import { Link } from "react-router-dom";
import { usePlanetas } from "../context/PlanetasContext";

export default function Planetas() {
  const { planetas } = usePlanetas();

  return (
    <div>
      <h1>Lista de Planetas</h1>
      {planetas && planetas.map(planeta => (
        <ul key={planeta.uid}>
          <li>
            <Link to={`/planeta/${planeta.uid}`}>
              {planeta.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
