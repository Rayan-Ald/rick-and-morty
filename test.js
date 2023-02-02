useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${personnageId}`)
        .then((res) => res.json())
        .then((data) => {
            setCharacter(data);
            fetch(
                `https://rickandmortyapi.com/api/episode/[${character.episode.map(
                    (episode) => episode.split("/").pop()
                )}]`
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setInEpisodes(data);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });

            fetch(
                `${character.location.url}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setLocation(data);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
}, [personnageId]);