import React from "react";

export interface ProfileProps {
  id: number;
  username: string;
  role: string;
  name: string;
  email: string;
  phone: string;
}

const Profile = ({ id, username, role, name, email, phone }: ProfileProps) => {
  return (
    <div>
      <p>id:{id}</p>
      <p>username:{username}</p>
      <p>role:{role}</p>
      <p>name:{name}</p>
      <p>email:{email}</p>
      <p>phone:{phone}</p>
    </div>
  );
};

export default Profile;
