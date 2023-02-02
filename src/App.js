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
import Login from './Components/Login/Login';
import Register from './Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Reset from './Components/Reset/Reset';

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
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='*' element={<Acceuil />} />
        </Routes>
      </Router>
    </div>

  );
}