import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm";
import { Route } from "react-router-dom";

export default function App() {
    return (
        <main>
            <Route path="/" component={Header} />
            <Route path="/" exact component={WelcomePage} />
            <Route path="/" exact component={SearchForm} />
            {/* <Route path="/" exact component={CharacterList} /> */}
        </main>
    );
}
