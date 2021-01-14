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

export function createRecipe(accessToken, recipe){
    return fetch(`${process.env.REACT_APP_AUTH0_AUDIENCE}/recipes`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "content-type" : "application/json",
        },
        body: JSON.stringify(recipe)
    })
        .then(res => {
            if (res.status === 201) {
                return res.headers.get("Location");
            } else {
                return false;
            }
        });
}

export function editRecipe(accessToken, recipe, id){
    return fetch(`${process.env.REACT_APP_AUTH0_AUDIENCE}/recipes/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "content-type" : "application/json",
        },
        body: JSON.stringify(recipe)
    })
        .then(res => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        });
}

export function deleteRecipe(accessToken, id){
    return fetch(`${process.env.REACT_APP_AUTH0_AUDIENCE}/recipes/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then(res => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        });
}