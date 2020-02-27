import React from "react";
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ImgClass = styled.div`
    width: 300px;
    height: 300px;
    border: solid 4px #5b8466;
`;

export default function WelcomePage() {
    return (
        <section className="welcome-page">
            <Header>
                <h1>Welcome to the ultimate fan site!</h1>
                <ImgClass>
                    <img
                        className="main-img"
                        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                        alt="rick"
                    />
                </ImgClass>
            </Header>
        </section>
    );
}
