import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Acceuil from './Components/Acceuil/Acceuil';
import Episode from './Components/Episode/EpisodePage';
import Favoris from './Components/Favoris/Favoris';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar/NavBar';
import PagePersonnage from './Components/PagePersonnage/PagePersonnage';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/episode" element={<Episode />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path='/personnage/:id' element={<PagePersonnage />} />
        </Routes>
      </Router>
    </div>

  );
}