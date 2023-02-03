import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Personnage from '../Personnage/Personnage';
import { CardGroup } from 'react-bootstrap';


export default function Favoris() {
    const [favorisCookie, setFavorisCookie] = useState(null)
    const [personnagesFavoris, setPersonnagesFavoris] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [passer, setPasser] = useState(false);
    let personnageFavoriArray = [];
    useEffect(() => {
        const fav = Cookies.get('favorisCookies')
        let idPersonnagesFavoris = []
        if (fav !== undefined) {
            idPersonnagesFavoris = fav.split(',')
        }
        if (idPersonnagesFavoris.length > 0) {
            console.log("length", idPersonnagesFavoris.length);
            let url = 'https://rickandmortyapi.com/api/character/['

            if (idPersonnagesFavoris.length > 0) {
                idPersonnagesFavoris.map((id) => {
                    if (id == null) setPasser(true)
                    url += id + ','
                })
                url = url.slice(0, -1) + ']'
                if (!passer) {
                    fetch(url)
                        .then(response => response.json())
                        .then(personnages => {
                            setIsLoaded(true)
                            setPersonnagesFavoris(personnages)
                        })
                }

            }
        }
        else { setIsLoaded(true) }

    }, [personnagesFavoris])
    if (isLoaded) {
        personnagesFavoris.forEach(personnage => {
            personnageFavoriArray.push(personnage)
        })
    } else {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Favoris</h2>
            {personnageFavoriArray.length !== 0 ?
                <CardGroup style={{ margin: '5rem' }} >
                    {personnageFavoriArray.map(personnage => <div key={personnage.id}> {Personnage(personnage, setFavorisCookie, 1)} </div>)}
                </CardGroup>
                :
                <div>vous n'avez pas de favoris</div>
            }
        </div >
    )

}