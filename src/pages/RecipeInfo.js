import * as recipeData from "../api/api_recipe";
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';



export default function RecipeInfo(props) {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        recipeData.getRecipeById(props.match.params.id).then(res => setRecipe(res)).catch(err => console.log(err));
    }, [props.match.params.id]);

    return (
        <>
            {recipe ? <div>
                <div className="infoBox">
                    <div><img src={recipe.image ? `/images/${recipe.image}` : `/images/noimagefound.png`} className="infoPicture" alt=""></img></div>
                    <div>
                        <h2>{recipe.name}</h2>
                        <hr></hr>
                        <p>{recipe.description}</p>
                    </div>
                </div>
            </div> : <></>}
        </>
    );
}