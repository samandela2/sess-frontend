export interface UserBasicProps {
  id: number;
  username: string;
  role: string;
}

const UserBasic = ({ id, username, role }: UserBasicProps) => {
  return (
    <div className="TaskBasic">
      <p>
        <strong>username:</strong>
        {" " + username}
      </p>
      <p>
        <strong>role:</strong>
        {" " + role}
      </p>
    </div>
  );
};

export default UserBasic;
