import React from "react";
//import styled from "styled-components";

export default function CharacterCard({ character }) {
    const { name, status, species, gender } = character;
    return (
        <div className="cards">
            <h2>Name:{name}</h2>
            <h3>Status:{status}</h3>
            <h3>Species:{species}</h3>
            <h3>Gender:{gender}</h3>
        </div>
    );
}
