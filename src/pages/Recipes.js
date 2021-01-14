import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import * as recipeData from "../api/api_recipe";
import CardDeck from "react-bootstrap/CardDeck";
import RecipeCard from "../components/RecipeCard";
import * as userData from "../api/api_user";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Recipes() {
  const { getAccessTokenSilently, user } = useAuth0();
  const [accessToken, setAccessToken] = useState("");
  const [recipes, setRecipes] = useState(undefined);
  const [userr, setUserr] = useState(undefined);
  const history = useHistory();


  useEffect(() => {
    if (!recipes) {
      recipeData.getRecipes().then(res => setRecipes(res)).catch(err => console.log(err));
    }

    if (user && !userr) {
      getAccessTokenSilently()
        .then((accessToken) => {
          userData
            .getUser(accessToken)
            .then((profile) => {
              setAccessToken(accessToken);
              setUserr(profile);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  }, [user, getAccessTokenSilently, recipes, userr]);

  const deleteRecipe = (id) => {
    recipeData.deleteRecipe(accessToken, id).then(res => {
      history.go(0);
    }).catch((error) => {
      alert(`Could not delete product: ${error.message}`);
    });
  };

  return (
    <>
      <Link to={`/addRecipe`}>
          <Button variant="success">+ Add Recipe</Button>
      </Link>
      {userr ? (
        <>
          <h2>Your Recipes</h2>
          <CardDeck>{
            recipes.filter(r => r.created_by === userr.id).map((m, i) => <RecipeCard {...m} canDelete={true} canEdit={true} onDelete={deleteRecipe} key={i} />)
          }</CardDeck>
          <h2>Other Recipes</h2>
          <CardDeck>{recipes.filter(r => r.created_by !== userr.id).map((m, i) => <RecipeCard {...m} canDelete={userr.isAdmin === 1} onDelete={deleteRecipe} key={i} />)
          }</CardDeck>
        </>) :
        <CardDeck>{recipes && recipes.map((m, i) => <RecipeCard {...m} key={i} />)}</CardDeck>

      }
    </>
  );
}