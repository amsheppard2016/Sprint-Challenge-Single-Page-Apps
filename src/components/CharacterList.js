import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

const AllCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3%;
`;

const Card = styled.div`
    background: #c7493a;
    width: 30%;
    border: solid 4px #5b8466;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    margin: 1%;
`;

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
            <AllCard>
                {characters.map((character, index) => {
                    return (
                        <Card>
                            <CharacterCard key={index} character={character} />
                        </Card>
                    );
                })}
            </AllCard>
        </section>
    );
}
