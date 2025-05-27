import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Planetas from './paginas/Planetas';
import PlanetaDetalle from './paginas/PlanetasDetalle';
import Header from './componentes/header/Header';
import PlanetasProvider from './context/PlanetasContext';
import './App.css'
import Footer from './componentes/footer/Footer';

function App() {
  return (
    <PlanetasProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Planetas />} />
        <Route path='/planeta/:id' element={<PlanetaDetalle />} />
      </Routes>
      <Footer />
    </PlanetasProvider>

  );
}

export default App;
