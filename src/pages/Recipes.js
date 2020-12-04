import React, {useState, useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";


function Recipes() {
  const { user, getAccessTokenSilently } = useAuth0();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      try{
        const accessToken = await getAccessTokenSilently({audience: process.env.REACT_APP_AUTH0_AUDIENCE, scope: "openid profile email"});
        console.log(accessToken);

        fetch(`${process.env.REACT_APP_AUTH0_AUDIENCE}/recipes`, {headers: {Authorization: `Bearer ${accessToken}`}} )
        .then(res => {
          return(res.json());
        })
        .then(res => setRecipes(res))
        .catch(err => {
          console.log(err);
        })
      }
      catch(e){
        console.log(e);
      }
    })();
  }, [user])

    console.log(recipes);

  return (
    <div>
        <h2>Recipes</h2>
        {recipes && (
          <div>
            recipes received
          </div>
        )}
    </div>
  );
}

export default Recipes;
