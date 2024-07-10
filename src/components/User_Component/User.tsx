import "./User.css";
import { UserProps } from "../../types/Interface";

const User = ({ id, username, role, email }: UserProps) => {
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
      {/* <p>
        <strong>Name:</strong>
        {" " + name}
      </p> */}
      <p>
        <strong>Email:</strong>
        {" " + email}
      </p>
      {/* <p>
        <strong>Phone number:</strong>
        {" " + phone}
      </p> */}
    </div>
  );
};

export default User;
