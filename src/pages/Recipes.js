import React, { useState, useEffect } from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
import * as recipeData from "../api/api_recipe";
import CardDeck from "react-bootstrap/CardDeck";
import RecipeCard from "../components/RecipeCard";


export default function Recipes() {
  //   // const { getAccessTokenSilently } = useAuth0();
  //   // const [accessToken, setAccessToken] = useState("");
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
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeData.getRecipes().then(res => setRecipes(res)).catch(err => console.log(err));
  }, []);

  return (
    <CardDeck>{recipes.length > 0 && recipes.map((m, i) => <RecipeCard {...m} key={i} />)}</CardDeck>
  );
}
