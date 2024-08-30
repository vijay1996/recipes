import React, { useState } from "react";
import RecipeList from "./RecipeList";
import ViewContext from "../context/ViewContext";
import RecipeView from "./RecipeView";
import Navbar from "./Navbar";
import About from "./About";
import '../css/app.css';

const App = () => {
    const [view, setView] = useState('main');
    const [selectedRecipeFile, setSelectedRecipeFile] = useState(null);
    return (
        <ViewContext.Provider value={{view, setView, selectedRecipeFile, setSelectedRecipeFile}}>
            <header id="mainHeader">
                <div id="imageLayer">
                    <div>
                        <h1>Welcome to My Recipe Book</h1>
                        <p>Delicious homemade recipes just for you!</p>
                    </div>
                </div>  
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

            <footer id="footer">
                <p>&copy; 2024 My Recipe Book. All rights reserved.</p>
            </footer>
        </ViewContext.Provider>
    )
}

export default App;