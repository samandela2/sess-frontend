import React from "react";

export interface UserProps {
  id: number;
  username: string;
  role: string;
}

const User = ({ id, username, role }: UserProps) => {
  return (
    <div>
      <p>username:{username}</p>
      <p>role:{role}</p>
    </div>
  );
};

export default User;
