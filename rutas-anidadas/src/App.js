import './App.css';
import { Route, Routes } from 'react-router-dom';
import Perfil from './paginas/Perfil';
import Home from './paginas/Home';
import Header from './componentes/header/Header';
import Usuario from './paginas/Usuario';
import Settings from './paginas/Settings';
import Footer from './componentes/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Perfil' element={<Perfil />}>
          <Route path='Usuario' element={<Usuario />}/>
          <Route path='Settings' element={<Settings />}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
