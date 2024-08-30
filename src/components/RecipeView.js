import React, { useContext, useEffect } from "react";
import ViewContext from "../context/ViewContext";
import '../css/recipeView.css';

const RecipeView = () => {
    window.location.href = "#"
    const {selectedRecipeFile, recipeTitle} = useContext(ViewContext);
    const metadata = require('../metadata/' + selectedRecipeFile);
    const image = require('../assets/images/' + metadata.image);
    const ingredientList = require('../metadata/_ingredients.json');
    return (
        <div id="recipeViewContent">
            <h1 className="title">{metadata.title}</h1>
            <img src={image} alt={recipeTitle} className="coverImage" />
            <div id="recipeViewFlex">
                <div className="ingredientsSection">
                    <h2 className="title">Ingredients</h2>
                    <table cellSpacing={"10%"}>
                        <thead style={{fontWeight: "bold"}}>
                            <td></td>
                            <td>Ingredients</td>
                            <td>Quantity</td>
                        </thead>
                        <tbody>
                            {metadata.ingredients.map(ingredient => {
                                return (<tr><td><input type="checkbox" /></td><td>{ingredientList[ingredient.name]} </td><td>{ingredient.quantity}</td></tr>);
                            })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2 className="title">procedure</h2>
                    <ol id="procedure">
                        {metadata.procedure.map(step => {
                            return (<li>{step}</li>)
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default RecipeView;