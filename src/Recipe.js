import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="nine">
      <div>
        <h1>{title}</h1>
      </div>
      <h3>Calories : {calories}</h3>
      <h3>Ingredients : </h3>
      <p>
        {ingredients.map((ingredient) => (
          <li> {ingredient.text} </li>
        ))}
      </p>

      <img src={image} alt="" />
    </div>
  );
};
export default Recipe;
