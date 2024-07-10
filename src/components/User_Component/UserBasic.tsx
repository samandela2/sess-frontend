// export interface UserBasicProps {
//   id: number;
//   username: string;
//   role: string;
// }

import { UserProps } from "../../types/Interface";

const UserBasic = ({ id, username, role }: UserProps) => {
  return (
    <div className="TaskBasic">
      <p>
        <strong>username:</strong>
        {" " + username}
      </p>
      <p>
        <strong>role:</strong>
        {" " + (role == "ROLE_ADMIN" ? "ADMIN" : "USER")}
      </p>
    </div>
  );
};

export default UserBasic;
