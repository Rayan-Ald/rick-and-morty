import { useEffect, useState } from "react"
import { CardGroup } from "react-bootstrap"
import Personnage from "../Personnage/Personnage"
import "./Episode.css"

export default function Episode(episode) {
    const [characterCharacteristics, setCharacterCharacteristics] = useState([])
    const [favorisCookie, setFavorisCookie] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [active, setActive] = useState(false)

    const handleToggle = e => {
        setActive(!active)
    }
    function characters() {
        return (
            <div className={`accordion ${active && "active"}`}>
                <div className="accordion__title" onClick={handleToggle}>
                    Personnages <span className="accordion__icon"></span>
                </div>
                <div className="accordion__content">
                    {isLoaded && characterCharacteristics.length !== 0 ?
                        <CardGroup style={{ margin: '5rem' }} >

                            {characterCharacteristics.map(character =>
                                <div key={character.id}>{Personnage(character, setFavorisCookie, 1)}</div>
                            )}
                        </CardGroup>
                        :
                        <div>
                            <h6>Personnage : loading</h6>
                        </div>
                    }
                </div>
            </div>
        )
    }

    function sendToEpisode(id) {
        return () => {
            window.location.href = '/episode/' + id
        }
    }
    useEffect(() => {
        episode.episode.characters.map(character => {
            // let chara
            let newChar = character.split('/')
            fetch(character)
                .then(response => response.json())
                .then(character => {
                    setCharacterCharacteristics(characterCharacteristics => [...characterCharacteristics, character])
                })
        })

        setIsLoaded(true)
    }, [])


    return (
        <div style={{ margin: '1rem' }}>
            <h4 onClick={sendToEpisode(episode.episode.id)}>Episode : {episode.episode.episode}, Nom : {episode.episode.name} </h4>
            <p>Date de sortie : {episode.episode.air_date}</p>
            <div > {characters()} </div>
        </div >
    )

}