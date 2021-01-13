import { useAuth0 } from "@auth0/auth0-react";
import * as userData from "../api/api_user";
import { useHistory } from "react-router-dom";


export default function SaveUser() {
    const { getAccessTokenSilently, isLoading } = useAuth0();
    const history = useHistory();
    if (!isLoading) {
        getAccessTokenSilently().then(accessToken => {
            userData.getUser(accessToken).then(res => {
                console.log(res);

                if (res.status) {
                    console.log(res);

                    //als er een statuscode wordt teruggegeven is het foutgelopen, als status 200 is krijg je enkel response zonder de statuscode van 200
                    userData.saveUser(accessToken)
                        .then(res => {
                            history.push("/");
                        }).catch(e => alert("An error occured while creating user account"));
                } else {
                    history.push("/");
                }
            })
                .catch(err => {
                    console.log(err);
                });
        }).catch(err => console.log(err));
    }
    return <h5>Loading</h5>;
}