import React from "react";
import "./User.css";

export interface UserProps {
  id: number;
  username: string;
  role: string;
  name: string;
  email: string;
  phone: string;
}

const User = ({ id, username, role, name, email, phone }: UserProps) => {
  return (
    <div className="User-floating">
      <p>
        <strong>User ID:</strong>
        {" " + id}
      </p>
      <p>
        <strong>Username: </strong>
        {" " + username}
      </p>
      <p>
        <strong>Role:</strong>
        {" " + role}
      </p>
      <p>
        <strong>Name:</strong>
        {" " + name}
      </p>
      <p>
        <strong>Email:</strong>
        {" " + email}
      </p>
      <p>
        <strong>Phone number:</strong>
        {" " + phone}
      </p>
    </div>
  );
};

export default User;
