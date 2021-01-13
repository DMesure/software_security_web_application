// import { useAuth0 } from "@auth0/auth0-react";
const endpoint = process.env.REACT_APP_AUTH0_AUDIENCE;

export function getRecipes() {
    return fetch(`${endpoint}/recipes`)
        .then(res => {
            return (res.json());
        })
        .catch(err => {
            alert(err);
        });
}

export function getRecipeById(id) {
    return fetch(`${endpoint}/recipes/${id}`)
        .then(res => {
            return (res.json());
        })
        .catch(err => {
            alert(err);
        });
}