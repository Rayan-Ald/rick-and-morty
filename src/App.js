import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Acceuil from './Components/Acceuil/Acceuil';
import EpisodePage from './Components/Episode/EpisodePage';
import Favoris from './Components/Favoris/Favoris';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar/NavBar';
import PagePersonnage from './Components/PagePersonnage/PagePersonnage';
import SingleEpisode from './Components/Episode/SingleEpisode';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/episodes" element={<EpisodePage />} />
          <Route path="/episode/:id" element={<SingleEpisode />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path='/personnage/:id' element={<PagePersonnage />} />
        </Routes>
      </Router>
    </div>

  );
}