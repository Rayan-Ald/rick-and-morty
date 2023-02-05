import Cookies from 'js-cookie';
import Personnage from '../Personnage/Personnage';
import React, { useState, useEffect } from 'react';
import { CardGroup } from 'react-bootstrap';
import { getFavoris } from '../../firebase';
import { useParams } from 'react-router-dom';

export default function Acceuil(user) {
  const [characters, setCharacters] = useState([]);
  const [location, setLocation] = useState(null);
  const [favorisCookie, setFavorisCookie] = useState(null);
  const [personnagesFavoris, setPersonnagesFavoris] = useState([]);
  const [isLoadedPersonnagesFavoris, setIsLoadedPersonnagesFavoris] = useState(false);

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

    // getFavoris()
    //   .then(tabFavs => {
    //     let url = 'https://rickandmortyapi.com/api/character/[' + tabFavs + ']'
    //     fetch(url)
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log('Success:', data);
    //         setPersonnagesFavoris(data)
    //         setIsLoadedPersonnagesFavoris(true)
    //       })
    //   })

  }, []);

  return (
    <div>
      <div>
        <h2 style={{ margin: '1rem' }}>Personnages</h2>
        {characters.length > 0 ?
          <CardGroup style={{ margin: '5rem' }} >
            {characters.map(character =>
              <div key={character.id}> {
                isLoadedPersonnagesFavoris ?
                  <div>
                    {Personnage(character, 1, personnagesFavoris)}
                  </div>
                  :
                  <div>
                    {Personnage(character, 1, null)}
                  </div>
              } </div>
            )}
          </CardGroup>
          :
          <div>loading..</div>
        }
      </div>

      <div>
        {isLoadedPersonnagesFavoris ?
          <div>
            <h2 style={{ margin: '1rem' }}>Favoris</h2>

            <CardGroup style={{ margin: '5rem' }}>
              {personnagesFavoris.slice(0, 5).map(personnage =>
                <div key={personnage.id}> {Personnage(personnage, 2, personnagesFavoris)} </div>
              )}
            </CardGroup>

          </div>
          :
          <div>loading..</div>
        }
      </div>

    </div>
  )


}

