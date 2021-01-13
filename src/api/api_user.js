export function getUser(accessToken) {
    return fetch(
        `${process.env.REACT_APP_AUTH0_AUDIENCE}/user`, { headers: { Authorization: `Bearer ${accessToken}` } }
    )
        .then(res => {
            if (res.status === 200) {
                return (res.json());
            } else {
                return res;
            }
        });
}

export function saveUser(accessToken) {

    return fetch(`${process.env.REACT_APP_AUTH0_AUDIENCE}/users`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then(res => {
            if (res.status === 201) {
                return true;
            } else {
                return false;
            }
        });
}