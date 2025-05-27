import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './paginas/Principal';
import Comentario from './paginas/Comentario';
import Header from './componentes/Header';
import Target from './paginas/Target';
import ComentariosProvider from './context/useComentario';

function App() {
  return (
    <div>
      <ComentariosProvider>
        <Header />
          <Routes>
            <Route path='/' element={<Principal />}/>
            <Route path='comentario' element={<Comentario />}/>
            <Route path='comentario/:id' element={<Target />}/>
          </Routes>
      </ComentariosProvider>
    </div>
  );
}

export default App;
