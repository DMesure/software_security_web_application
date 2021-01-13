import { useState, useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import RecipeCard from "../components/RecipeCard";
import CardDeck from "react-bootstrap/CardDeck";

export default function GetRecipes() {
    // const { getAccessTokenSilently } = useAuth0();
    // const [accessToken, setAccessToken] = useState("");
    const [recipes, setRecipes] = useState([]);

    // useEffect(() => {
    //     getAccessTokenSilently().then(res => {
    //         // setAccessToken(res); 
    //         fetch(`${process.env.REACT_APP_AUTH0_AUDIENCE}/recipes`, {
    //             headers: {
    //                 Authorization: `Bearer ${res}`,
    //             }
    //         }).then(res => {
    //             return (res.json());
    //         }).then(res => setRecipes(res))
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     }).catch(err => console.log(err));
    // }, [getAccessTokenSilently]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_AUTH0_AUDIENCE}/recipes`)
            .then(res => {
                return (res.json());
            }).then(res => setRecipes(res))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return <CardDeck>{recipes.length > 0 && recipes.map((m, i) => <RecipeCard {...m} key={i} />)}</CardDeck>

}