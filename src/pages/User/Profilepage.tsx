import React, { useState, useEffect } from "react";
import User, { UserProps } from "../../components/User_Component/User";

const UserPage = () => {
  const [user, setUser] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch("/adminProfileData.json")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data", error));
  }, []);

  if (!user) {
    return <div>Loading user user...</div>; // Or some loading spinner
  }

  return (
    <div className="profile">
      <section>
        <h2>User</h2>
        {user.length > 0 && <User {...user[0]} />}
      </section>
    </div>
  );
};

export default UserPage;
