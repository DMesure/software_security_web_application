import React, { useState, useEffect } from 'react';
// import { useAuth0 } from "@auth0/auth0-react";


function Recipes() {
  // const { getAccessTokenSilently } = useAuth0();
  // const [accessToken, setAccessToken] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    // getAccessTokenSilently().then(res => setAccessToken(res)).catch(err => console.log(err));

    fetch(`${process.env.REACT_APP_AUTH0_AUDIENCE}/recipes`)
      .then(res => {
        return (res.json());
      })
      .then(res => setRecipes(res))
      .catch(err => {
        console.log(err);
      });
  }, []);


  console.log(recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length ? (
        <div>
          recipes received
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}

export default Recipes;
