import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export default function Header() {
    return (
        <HeaderStyle>
            <NavLink to="/characterlist">
                <h2>Character List</h2>
            </NavLink>
            <NavLink to="/">
                <h1>Rick &amp; Morty Fan Page</h1>
            </NavLink>
            <NavLink to="/charactersearch">
                <h2>Search Characters</h2>
            </NavLink>
        </HeaderStyle>
    );
}
