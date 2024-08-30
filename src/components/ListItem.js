import React, { useContext, useEffect } from "react";
import ViewContext from "../context/ViewContext";
import '../css/listItem.css';

const ListItem = ({recipe}) => {
    const {file, name, image} = recipe;
    const banner = require(`../assets/images/${image}`);

    const {setView, setSelectedRecipeFile} = useContext(ViewContext);

    const handleSelect = () => {
        setView('recipe');
        setSelectedRecipeFile(file);
    }

    return (
        <div className="recipeListItem" id={file} onClick={() => handleSelect()}>
            <img src={banner} className={'recipeListItemBaner'}/>
            <div>{name}</div>
        </div>
    );
}

export default ListItem;