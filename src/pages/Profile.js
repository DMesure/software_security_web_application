import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div></div>
        <div>
          <p><span><b>In case of an issue or any form of objection feel free to contact us via:</b></span><span>Phone: 0654215624</span><span>E-Mail: damien.mesure@student.ehb.be</span></p>
        </div>
      </div>
    )
  );
};

export default Profile;