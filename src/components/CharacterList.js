import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
    // TODO: Add useState to track data from useEffect
    const [characters, setCharacter] = useState([]);
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response.data.results);
                setCharacter(response.data.results);
            })
            .catch(error => console.log(error));
    }, []);
    console.log(characters);
    if (!characters) return <h1>Loading.......</h1>;

    return (
        <section className="character-list">
            {characters.map((character, index) => {
                return <CharacterCard key={index} character={character} />;
            })}
        </section>
    );
}
