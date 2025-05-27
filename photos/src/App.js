import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componentes/header/Header';
import Fotos from './paginas/Fotos';
import Home from './paginas/home/Home';
import Footer from './componentes/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Fotos' element={<Fotos />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
