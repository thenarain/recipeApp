import React, { useEffect, useState } from "react";
import Recipe from "./recipe";
import User from "./user";
// import "./styles.css";

const App = () => {
  const APP_ID = "6d6687a7";
  const APP_KEY = "276a106691ab94fd9dec2d5082fe0965";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("kolhapuri");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    // https://api.edamam.com/search?q=clove&app_id=6d6687a7&app_key=276a106691ab94fd9dec2d5082fe0965
    const response = await fetch(
      `https://api.edamam.com/search?q=${query || ''}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <User />
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          placeholder="Search..."
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;
