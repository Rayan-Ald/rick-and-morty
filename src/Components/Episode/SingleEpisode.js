import { useEffect, useState } from "react"
import { CardGroup } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Personnage from "../Personnage/Personnage"
import "./Episode.css"

export default function SingleEpisode() {
    const [characterCharacteristics, setCharacterCharacteristics] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [active, setActive] = useState(false)
    const [episode, setEpisode] = useState([])
    const { id } = useParams()

    const handleToggle = e => {
        setActive(!active)
    }


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode/' + id)
            .then(response => response.json())
            .then(episode => {
                setEpisode(episode)
                episode.characters.map(character => {

                    fetch(character)
                        .then(response => response.json())
                        .then(character => {
                            setCharacterCharacteristics(characterCharacteristics => [...characterCharacteristics, character])
                        })
                })
                setIsLoaded(true)
            })
    }, [])


    if (!isLoaded) {
        return <div>Loading...</div>
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
                                <div key={character.id}>{Personnage(character, 0)}</div>
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

    return (
        <div style={{ margin: '1rem' }}>
            <h4 >Episode : {episode.episode}, Nom : {episode.name} </h4>
            <p>Date de sortie : {episode.air_date}</p>
            <div > {characters()} </div>
        </div >
    )

}