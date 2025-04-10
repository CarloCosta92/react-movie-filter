import { useEffect, useState } from "react";
import film from "./film";

function FilmFilter() {

    // Salvare lista dei film
    const [filteredFilm, setFilteredFilm] = useState(film);

    // Salvare il genere selezionato
    const [selectedGenre, setSelectedGenre] = useState('');

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

    console.log(genres)


    //Aggiornare la lista
    useEffect(() => {
        if (selectedGenre === '') {
            setFilteredFilm(film);
        } else {
            setFilteredFilm(film.filter((film) => film.genre === selectedGenre));
        }
    }, [selectedGenre]);


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
                <h2>Lista film filtrati</h2>
                <ul>
                    {/* visualizzare film filtrati */}
                    {filteredFilm.map((movie, index) => (
                        <li key={index}>
                            {movie.title} "{movie.genre}"
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default FilmFilter;