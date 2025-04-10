import { useEffect, useState } from "react";
import film from "./film";

function FilmFilter() {
    return (
        <div>
            <h1>Filtro per genere di film</h1>
            <select>
                <option value="">---</option>
                <option>Fantascienza</option>
                <option>Thriller</option>
                <option>Romantico</option>
                <option>Azione</option>
            </select>
        </div>
    )
}

export default FilmFilter;