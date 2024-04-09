import React, { useState, useEffect } from "react";
import Profile, { ProfileProps } from "../components/Profile";

const ProfilePage = () => {
  const [profile, setProfile] = useState<ProfileProps[]>([]);

  useEffect(() => {
    fetch("/adminProfileData.json") // path to your json file
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching profile data", error));
  }, []);

  if (!profile) {
    return <div>Loading profile...</div>; // Or some loading spinner
  }

  return (
    <div>
      <section>
        <h2>Profile</h2>
        {profile.length > 0 && <Profile {...profile[0]} />}
      </section>
    </div>
  );
};

export default ProfilePage;
