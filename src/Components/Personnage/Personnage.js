import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';
import { addFavori } from '../../firebase';

export default function Personnage(personnage, parent, personnagesFavoris) {
    const cookieValue = Cookies.get('favorisCookies');


    function addFavoris(id, name) {
        addFavori(id)
        if (parent === 1) {
            const cookieValue = Cookies.get('favorisCookies');
            if (!cookieValue) return Cookies.set('favorisCookies', id)
            if (cookieValue.search(id) === -1) {
                let cookies = cookieValue.split(',')
                cookies.push(id)
                Cookies.set('favorisCookies', Array.from(new Set(cookies)))
            } else {
                let cookies = cookieValue.split(',')
                cookies = cookies.filter(cookie => cookie != id)
                Cookies.set('favorisCookies', Array.from(new Set(cookies)))
            }
        } else if (parent === 2) {
            let cookies = cookieValue.split(',')
            cookies = cookies.filter(cookie => cookie != id)
            Cookies.set('favorisCookies', Array.from(new Set(cookies)))
        }

    }

    function afficherCoeur(id) {
        if (personnagesFavoris) {
            if (personnagesFavoris.includes(personnage)) {
                return <div><FontAwesomeIcon icon={solid('heart')} color='red' /></div>
            }
            return <div><FontAwesomeIcon icon={solid('heart')} color='grey' /></div>
        }
        return <div><FontAwesomeIcon icon={solid('heart')} color='grey' /></div>
    }
    return (
        <Card style={{ width: '10rem', height: '20rem', margin: '1rem' }}>
            <Card.Title style={{ margin: '1rem' }}>{personnage.name}</Card.Title>
            <Card.Img src={personnage.image} alt={personnage.name} />
            <Card.Link href={`/personnage/${personnage.id}`}>Plus d'infos</Card.Link>
            <button style={{ anchor: 'bottom' }} type="validate" onClick={() => addFavoris(personnage.id, personnage.name)}>
                {afficherCoeur(personnage.id)}
            </button>
        </Card >
    )
}
