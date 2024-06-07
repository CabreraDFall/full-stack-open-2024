const PersonList = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h2>Numbers</h2>
      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
};

export default PersonList;
