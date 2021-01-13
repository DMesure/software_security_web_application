import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import * as recipeData from "../api/api_recipe";
import CardDeck from "react-bootstrap/CardDeck";
import RecipeCard from "../components/RecipeCard";
import * as userData from "../api/api_user";


export default function Recipes() {
  const { getAccessTokenSilently, user } = useAuth0();
  const [accessToken, setAccessToken] = useState("");
  //   const [recipes, setRecipes] = useState([]);

  //   useEffect(() => {

  //     // getAccessTokenSilently().then(res => setAccessToken(res)).catch(err => console.log(err));

  //     fetch(`${process.env.REACT_APP_AUTH0_AUDIENCE}/recipes`)
  //       .then(res => {
  //         return (res.json());
  //       })
  //       .then(res => setRecipes(res))
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, []);


  //   console.log(recipes);
  const [recipes, setRecipes] = useState(undefined);
  const [userr, setUserr] = useState(undefined);

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
              setUserr(profile);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  }, [user, getAccessTokenSilently, recipes, userr]);

  return (
    <>
      {userr ? (
        <>
          <h2>Your Recipes</h2>
          <CardDeck>{
            recipes.filter(r => r.created_by === userr.id).map((m, i) => <RecipeCard {...m} key={i} />)
          }</CardDeck>
          <h2>Other Recipes</h2>
          <CardDeck>{recipes.filter(r => r.created_by !== userr.id).map((m, i) => <RecipeCard {...m} key={i} />)
          }</CardDeck>
        </>) :
        <CardDeck>{recipes && recipes.map((m, i) => <RecipeCard {...m} key={i} />)}</CardDeck>

      }
    </>
  );
}