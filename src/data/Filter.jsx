import { useEffect, useState } from "react";
import film from "./film";

function FilmFilter() {

    // Salvare lista dei film
    const [filteredFilm, setFilteredFilm] = useState(film);

    // Salvare il genere selezionato
    const [selectedGenre, setSelectedGenre] = useState('');

    //Salvare la ricerca utente
    const [researchUser, setResearchUser] = useState("");

    // Funzione per cambiare il genere
    const changeGenre = (event) => {
        setSelectedGenre(event.target.value);
    };

    // creo variabile per i generi e metto condizione per togliere i duplicati

    const genres = [];
    film.forEach((film) => {
        if (!genres.includes(film.genre)) {
            genres.push(film.genre);
        }
    });

    // console.log(genres)

    //inserisco value utente

    const onChangeResearchUser = (event) => {
        setResearchUser(event.target.value)
        // console.log(researchUser)
    };


    //Aggiornare la lista
    useEffect(() => {

        let filmList = film;

        if (selectedGenre !== "") {
            filmList = filmList.filter((film) => film.genre === selectedGenre);
        }


        if (researchUser !== "") {

            filmList = filmList.filter((film) => film.title.includes(researchUser));
        }

        setFilteredFilm(filmList);


    }, [selectedGenre, researchUser]);


    return (
        <div>
            <h1>Filtro per genere di film</h1>
            <select value={selectedGenre} onChange={changeGenre}>
                <option value="">Tutti i generi</option>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}

            </select>

            <section>
                <h2>Ricerca per nome</h2>
                <input type="text" placeholder="inserisci nome del film" value={researchUser} onChange={onChangeResearchUser} />
            </section>

            <section>
                <h2>Lista film filtrati</h2>
                <ul>
                    {/* visualizzare film filtrati */}
                    {filteredFilm.map((film, index) => (
                        <li key={index}>
                            {film.title} "{film.genre}"
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default FilmFilter;