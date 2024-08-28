import React, { useContext, useEffect } from "react";
import ViewContext from "../context/ViewContext";

const imageStyle = {
    height: "500px",
    width: "100%",
    objectFit: "cover"
}

const ingredientStyle = {
    padding: "5px"
}

const footerImageStyle = {
    height: "250px",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center"
}

const RecipeView = () => {
    window.location.href = "#"
    const {selectedRecipeFile, recipeTitle} = useContext(ViewContext);
    const metadata = require('../metadata/' + selectedRecipeFile);
    const image = require('../assets/images/' + metadata.image);
    const ingredientList = require('../metadata/_ingredients.json');
    return (
        <div id="recipeViewContent">
            <h1>{metadata.title}</h1>
            <img src={image} alt={recipeTitle} style={imageStyle} />
            <div style={ingredientStyle}>
                <h2>Ingredients</h2>
                <table cellSpacing={"10%"}>
                    <thead style={{fontWeight: "bold"}}>
                        <td>Ingredients</td>
                        <td>Quantity</td>
                    </thead>
                    <tbody>
                        {metadata.ingredients.map(ingredient => {
                            return (<tr><td>{ingredientList[ingredient.name]} </td><td>{ingredient.quantity}</td></tr>);
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                <h2>procedure</h2>
                <ol>
                    {metadata.procedure.map(step => {
                        return (<li>{step}</li>)
                    })}
                </ol>
            </div>
        </div>
    )
}

export default RecipeView;