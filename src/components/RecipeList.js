import React, { useState } from 'react';
import recipeList from '../metadata/_list.json'
import ListItem from './ListItem';

const RecipeList = () => {
    const { recipes } = recipeList

    const [searchString, setSearchString] = useState('')
    
    return (
        <div id="recipeList">
            <br></br>
            <h1>Recipes</h1>
            <input type='text' value={searchString} onChange={(e) => setSearchString(e.target.value)} placeholder='Search...' />
            <div id="recipeListItems">
                {recipes.filter(recipe => recipe.name.toLowerCase().includes(searchString.toLowerCase())).map(recipe => {
                    return <ListItem key={recipe.name} recipe={recipe} />
                })}
            </div>
        </div>
    );
}

export default RecipeList;