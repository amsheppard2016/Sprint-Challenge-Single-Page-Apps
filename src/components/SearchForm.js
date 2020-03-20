import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Search = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3%;
`;

const SearchResults = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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

export default function SearchForm() {
    const [data, setData] = useState([]);

    const [query, setQuery] = useState("");
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response);
                const characters = response.data.results.filter(character =>
                    character.name.toLowerCase().includes(query.toLowerCase())
                );
                setData(characters);
            });
    }, [query]);
    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    return (
        <section className="search-form">
            <Search>
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    name="name"
                    tabIndex="0"
                    className="prompt search-name"
                    placeholder="Search By Name"
                    autoComplete="off"
                />
            </Search>
            <SearchResults>
                {data.map(data => {
                    return (
                        <Card key={data.index}>
                            <h2>{data.name}</h2>
                            <h3>Status:{data.status}</h3>
                            <h3>Species:{data.species}</h3>
                            <h3>Gender:{data.gender}</h3>
                        </Card>
                    );
                })}
            </SearchResults>
        </section>
    );
}
