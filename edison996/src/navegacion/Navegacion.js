import { Link } from 'react-router-dom';
import './Navegacion.css';

function Navegacion() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li className="submenu">
          <span>Atención y Servicio a la Ciudadanía ▼</span>
          <ul className="dropdown">
            <li><Link to="/opas">Trámites y Otros Procedimientos Administrativos - OPAS</Link></li>
            <li><Link to="/servicios">Servicios de la Entidad</Link></li>
            <li><Link to="/canales">Canales de atención</Link></li>
            <li><Link to="/pqrsd">Presentar PQRSD</Link></li>
            <li><Link to="/corrupcion">Denuncias de actos de corrupción</Link></li>
            <li><Link to="/pagos">Pagos en Línea</Link></li>
            <li><Link to="/radicacion">Oficina virtual de radicación</Link></li>
            <li><Link to="/satisfaccion">Satisfacción del usuario</Link></li>
            <li><Link to="/grupos-interes">Caracterización de Grupos de Valor y de Interés</Link></li>
            <li><Link to="/capsulas">Cápsulas Informativas</Link></li>
            <li><Link to="/faq">Preguntas frecuentes</Link></li>
            <li><Link to="/trato-digno">Carta de trato digno</Link></li>
            <li><Link to="/glosario">Glosario</Link></li>
            <li><Link to="/videoconferencias">Sistema de Videoconferencias</Link></li>
            <li><Link to="/calendario">Calendario de actividades</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navegacion;
