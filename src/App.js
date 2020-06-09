import React, { Component } from "react";

import "./App.css";
import SearchRecipes from "./components/SearchRecipes";
import RecipeList from "./components/RecipeList";
import FavoriteRecipeList from "./components/FavoriteRecipeList";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Recipe Finder</h2>
        <SearchRecipes />
        <RecipeList />
        <FavoriteRecipeList />
      </div>
    );
  }
}

export default App;
