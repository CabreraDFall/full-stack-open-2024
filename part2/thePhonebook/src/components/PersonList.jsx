const PersonList = ({ users, deleteObject }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {users.map((user) => {
        return (
          <p key={user.id}>
            {user.name} {user.number}
            <button
              type="button"
              onClick={() =>
                window.confirm(`Delete ${user.name}`)
                  ? deleteObject(user.id)
                  : null
              }
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default PersonList;
