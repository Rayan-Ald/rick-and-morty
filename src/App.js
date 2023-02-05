import 'bootstrap/dist/css/bootstrap.min.css';
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref, set } from "firebase/database";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './Components/Acceuil/Acceuil';
import Dashboard from './Components/Dashboard/Dashboard';
import EpisodePage from './Components/Episode/EpisodePage';
import SingleEpisode from './Components/Episode/SingleEpisode';
import Favoris from './Components/Favoris/Favoris';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import PagePersonnage from './Components/PagePersonnage/PagePersonnage';
import Register from './Components/Register/Register';
import Reset from './Components/Reset/Reset';
import { auth, db } from './firebase';
import { deleteFavoris, setFavoris } from './redux/favorisSlice';
import { userLogIn, userLogOut } from './redux/userSlice';

export default function App() {

  const dispatch = useDispatch()
  const favoris = useSelector(state => state.favoris);
  const userId = useSelector(state => state.user);

  useEffect(() => {
    if (userId.user) {

      console.log('userId.user');
      set(ref(db, 'users/' + userId.uid), {
        name: userId.name,
        email: userId.email,
        favoris: []
      });
    }
  }, [favoris]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userLogIn(user.uid))

        onValue(ref(db, 'users/' + user.uid), (snapshot) => {
          const data = snapshot.val();
          dispatch(setFavoris(data ?? []));
        })
      } else {
        dispatch(userLogOut())
        dispatch(deleteFavoris())
      }
    })
  }, [auth])

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