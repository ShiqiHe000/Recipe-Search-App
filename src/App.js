import React, { useEffect, useState } from "react";
// import "./css/App.css";
import "./scss/App.scss";
import { Recipe } from "./components/Recipe";

import { APP_ID, APP_KEY } from "./config/keys";

function App() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        const recipeUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        const getRecipes = async () => {
            const response = await fetch(recipeUrl);
            const data = await response.json();
            setRecipes(data.hits);
        };
        getRecipes();
    }, [query]);

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    return (
        <div className="app">
            <form className="search-form" onSubmit={getSearch}>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="chicken"
                    value={search}
                    onChange={updateSearch}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            {recipes.map((recipe, index) => (
                <Recipe
                    key={index}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    img={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
    );
}

export default App;
