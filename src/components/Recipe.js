import React from "react";
import style from "../scss/Recipes.module.scss";

export const Recipe = ({ title, calories, img, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            <p className="calories-value">
                <span>Calories: </span>
                {calories}
            </p>
            {/* eslint-disable-next-line */}
            <img src={img} className={style.img} />
            <hr />
        </div>
    );
};
