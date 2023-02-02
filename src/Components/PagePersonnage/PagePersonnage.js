import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PagePersonnage() {

    const { id } = useParams()
    const [character, setCharacter] = useState([])
    const [episodes, setEpisodes] = useState([]);
    const [location, setLocation] = useState([]);
    const [isLoadedCharacter, setIsLoadedCharacter] = useState(false);
    const [isLoadedEpisodes, setIsLoadedEpisodes] = useState(false);
    const [active, setActive] = useState(false)


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(characters => {
                setIsLoadedCharacter(true)
                setCharacter(characters)
                fetch(`https://rickandmortyapi.com/api/episode/[${characters.episode.map(episode => episode.split("/").pop())}]`)
                    .then(response => response.json())
                    .then(episodes => {
                        setEpisodes(episodes);
                        setIsLoadedEpisodes(true)
                    })

                fetch(`${characters.location.url}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setLocation(data);
                    })
            })

    }, [id])

    const handleToggle = e => {
        setActive(!active)
    }
    if (!isLoadedCharacter) {
        return <div>Loading characters...</div>
    }
    let listEpisodes = character.episode
    console.log('isloadedcharacters : ' + isLoadedCharacter + ', listEpisodes : ' + listEpisodes);


    if (!isLoadedEpisodes) {
        return <div>Loading episodes...</div>
    }
    console.log(episodes);
    const episodesItem = episodes.map((episode) => {
        return <li onClick={sendToEpisode(episode.id)} key={episode.id}>Code : {episode.episode}, Nom : {episode.name}</li>
    })

    function sendToEpisode(id) {
        return () => {
            window.location.href = '/episode/' + id
        }
    }

    return (
        <div >
            <h1>Page Personnage : {character.name}</h1>
            <img src={character.image} alt={character.name} style={{ width: '200px', alignContent: 'center' }} />
            <p>Origine : {character.origin.name} <img src={character.origin.url} alt={character.origin.name} /></p>
            <div className={`accordion ${active && "active"}`}>
                <div className="accordion__title" onClick={handleToggle}>
                    Episodes <span className="accordion__icon"></span>
                </div>
                <div className="accordion__content">
                    <ul>{episodesItem}</ul>
                </div>
            </div>
        </div>
    )
}