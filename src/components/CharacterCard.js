import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background-color: #53c291;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
`;

export default function CharacterCard({ character }) {
    const { name, status, species, gender } = character;
    return (
        <Card>
            <h2>Name:{name}</h2>
            <h3>Status:{status}</h3>
            <h3>Species:{species}</h3>
            <h3>Gender:{gender}</h3>
        </Card>
    );
}
