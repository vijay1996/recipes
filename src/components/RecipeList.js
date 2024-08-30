import React, { useEffect, useState } from 'react';
import recipeList from '../metadata/_list.json'
import ListItem from './ListItem';
import '../css/recipeList.css';

const RecipeList = () => {
    const { recipes } = recipeList

    const [searchString, setSearchString] = useState('')
    const [validRecipes, setValidRecipes] = useState([]);

    useEffect(() => {
        setValidRecipes(recipes.filter(recipe => recipe.name.toLowerCase().includes(searchString.toLowerCase())))
    }, [searchString]);
    
    return (
        <div id="recipeList">
            <h1 className='title'>Recipes</h1>
            <input className='searchBox' type='text' value={searchString} onChange={(e) => setSearchString(e.target.value)} placeholder='Search...' />
            <div id="recipeListItems">
                {!!validRecipes.length ? (validRecipes.map(recipe => {
                    return <ListItem key={recipe.name} recipe={recipe} />
                })): 'No results found...'}
            </div>
        </div>
    );
}

export default RecipeList;