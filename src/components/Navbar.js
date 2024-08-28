import React, { useContext } from "react";
import ViewContext from "../context/ViewContext";

const Navbar = () => {
    const {setView} = useContext(ViewContext);
    return (
        <nav>
            <ul>
                <li><a href="#" onClick={() => setView('main')}>Home</a></li>
                <li><a href="#recipes" onClick={() => setView('main')}>Recipes</a></li>
                <li><a href="#about" onClick={() => setView('main')}>About Me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;