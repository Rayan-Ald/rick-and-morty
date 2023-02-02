import React, { Component, useEffect } from 'react';
import Episode from './Episode';

export default function EpisodePage() {
  const [favorisCookie, setFavorisCookie] = React.useState(null);
  const [episodes, setEpisodes] = React.useState(null);
  const [characterCharacteristics, setCharacterCharacteristics] = React.useState(null)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(episode => setEpisodes(episode))
  })

  return (
    <div>
      {
        episodes ?
          <div>
            {
              episodes.results.map(episode =>
                <div key={episode.id}> <Episode episode={episode} /> </div>
              )}
          </div>
          :
          <div>loading</div>
      }
    </div >
  )
}

