import Cookies from 'js-cookie';
import Personnage from '../Personnage/Personnage';
import React, { useState, useEffect } from 'react';
import { CardGroup } from 'react-bootstrap';

export default function Acceuil() {
  const [characters, setCharacters] = useState(null);
  const [location, setLocation] = useState(null);
  const [episode, setEpisode] = useState(null);
  const [favorisCookie, setFavorisCookie] = useState(null);
  const [personnagesFavoris, setPersonnagesFavoris] = useState([]);

  useEffect(() => {
    setFavorisCookie(Cookies.get('favorisCookies'))

    const chiffre1 = Math.floor(Math.random() * 826);
    const chiffre2 = Math.floor(Math.random() * 826);
    const chiffre3 = Math.floor(Math.random() * 826);
    const chiffre4 = Math.floor(Math.random() * 826);
    const chiffre5 = Math.floor(Math.random() * 826);

    fetch('https://rickandmortyapi.com/api/character/' + chiffre1 + ',' + chiffre2 + ',' + chiffre3 + ',' + chiffre4 + ',' + chiffre5)
      .then(response => response.json())
      .then(characters => setCharacters(characters))

    const chiffreLocalisation1 = Math.floor(Math.random() * 826);
    const chiffreLocalisation2 = Math.floor(Math.random() * 826);
    const chiffreLocalisation3 = Math.floor(Math.random() * 826);
    const chiffreLocalisation4 = Math.floor(Math.random() * 826);
    const chiffreLocalisation5 = Math.floor(Math.random() * 826);

    fetch('https://rickandmortyapi.com/api/location/' + chiffreLocalisation1 + ',' + chiffreLocalisation2 + ',' + chiffreLocalisation3 + ',' + chiffreLocalisation4 + ',' + chiffreLocalisation5)
      .then(response => response.json())
      .then(location => setLocation(location))

    if (favorisCookie) {
      let fav = favorisCookie
      let idPersonnagesFavoris = fav.split(',');
      let url = 'https://rickandmortyapi.com/api/character/['

      idPersonnagesFavoris.forEach(id => {
        url += id + ','
      })
      url = url.slice(0, -1) + ']'
      fetch(url)
        .then(response => response.json())
        .then(personnages => {
          setPersonnagesFavoris(personnages)
        })
    }
  }, []);
  return (
    <div>

      <div>
        <h2 style={{ margin: '1rem' }}>Personnages</h2>
        {characters ?
          <CardGroup style={{ margin: '5rem' }} >
            {characters.map(character =>
              <div key={character.id}> {Personnage(character, setFavorisCookie, 1)} </div>
            )}
          </CardGroup>
          :
          <div>loading..</div>
        }
      </div>

      <div>
        <h2>Favoris</h2>
        {favorisCookie ?
          <div>
            {personnagesFavoris.size > 5 ?
              <CardGroup style={{ margin: '5rem' }}>
                {personnagesFavoris.map(personnage =>
                  <div key={personnage.id}> {Personnage(personnage, setFavorisCookie, 2)} </div>
                )}
              </CardGroup>

              :
              <CardGroup style={{ margin: '5rem' }}>
                {personnagesFavoris.map(personnage =>
                  <div key={personnage.id}> {Personnage(personnage, setFavorisCookie, 2)} </div>
                )}
              </CardGroup>}
          </div>
          :
          <div>loading..</div>
        }
      </div>

    </div>
  )


}

