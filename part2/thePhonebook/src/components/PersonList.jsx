const PersonList = ({ users }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {users.map((user) => {
        return (
          <p key={user.id}>
            {user.name} {user.number}
          </p>
        );
      })}
    </div>
  );
};

export default PersonList;
