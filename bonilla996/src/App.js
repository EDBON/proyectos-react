import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componente/Footer';
import Header from './componente/Header';
import Home from './Paginas/Home';
import Contacto from './Paginas/Contacto';
import Blog from './Paginas/Blog';
import Layout from './layout/Layaout';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Layout />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Contactos' element={<Contacto />} />
          <Route path='Blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
