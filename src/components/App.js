import React, { useState } from "react";
import RecipeList from "./RecipeList";
import ViewContext from "../context/ViewContext";
import RecipeView from "./RecipeView";
import Navbar from "./Navbar";
import About from "./About";

const App = () => {
    const [view, setView] = useState('main');
    const [selectedRecipeFile, setSelectedRecipeFile] = useState(null);
    return (
        <ViewContext.Provider value={{view, setView, selectedRecipeFile, setSelectedRecipeFile}}>
            <header id="mainHeader">
                <h1>Welcome to My Recipe Book</h1>
                <p>Delicious homemade recipes just for you!</p>
            </header>
            <Navbar />
            <div style={{width: "100%"}}>
                {view === 'main' && (
                    <div id="recipes" className="section">
                        <RecipeList />
                    </div>
                )}
                {view === 'main' && (
                    <div id="about" className="section">
                        <About />
                    </div>
                )}
                {view === 'recipe' && (
                    <div id="recipeView">
                        <RecipeView />
                    </div>
                )}
            </div>
        </ViewContext.Provider>
    )
}

export default App;