import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navegacion from './navegacion/Navegacion';


// Componentes de páginas (puedes luego personalizarlos)
import Inicio from './paginas/Inicio';
import OPAS from './paginas/OPAS';
import Servicios from './paginas/Servicios';
import Canales from './paginas/Canales';
import PQRSD from './paginas/PQRSD';
import Corrupcion from './paginas/Corrupcion';
import Pagos from './paginas/Pagos';
import Radicacion from './paginas/Radicacion';
import Satisfaccion from './paginas/Satisfaccion';
import GruposInteres from './paginas/GruposInteres';
import Capsulas from './paginas/Capsulas';
import FAQ from './paginas/FAQ';
import TratoDigno from './paginas/TratoDigno';
import Glosario from './paginas/Glosario';
import Videoconferencias from './paginas/Videoconferencias';
import Calendario from './paginas/Calendario';

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route>
                      <Route path="/opas" element={<OPAS />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/canales" element={<Canales />} />
          <Route path="/pqrsd" element={<PQRSD />} />
          <Route path="/corrupcion" element={<Corrupcion />} />
          <Route path="/pagos" element={<Pagos />} />
          <Route path="/radicacion" element={<Radicacion />} />
          <Route path="/satisfaccion" element={<Satisfaccion />} />
          <Route path="/grupos-interes" element={<GruposInteres />} />
          <Route path="/capsulas" element={<Capsulas />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/trato-digno" element={<TratoDigno />} />
          <Route path="/glosario" element={<Glosario />} />
          <Route path="/videoconferencias" element={<Videoconferencias />} />
          <Route path="/calendario" element={<Calendario />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
