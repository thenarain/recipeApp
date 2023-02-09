import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe-container">
      <h1>{title}</h1>
      <h4>Calories: {+calories.toFixed(2)}</h4>
      <div className="flexx recipes">
        <LazyLoadImage src={image} alt="" height={350} width={350} />
        <div className="recipesx">
          <h4 className="m-l-20">Ingredients</h4>
          <ul>
            {ingredients.map((ingredient) => (
              <li className="font-m">{ingredient.text.replace("* ", "")}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
