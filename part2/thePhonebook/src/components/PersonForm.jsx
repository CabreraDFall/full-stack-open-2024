const PersonForm = ({
  addNewObject,
  newName,
  handleNewName,
  newNumber,
  handleNewNumber,
}) => {
  return (
    <form onSubmit={addNewObject}>
      <div>
        name:
        <input
          name="name"
          value={newName}
          onChange={handleNewName}
          type="text"
        />
      </div>
      <div>
        number:
        <input
          name="number"
          value={newNumber}
          onChange={handleNewNumber}
          type="number"
        />
      </div>
      <div>
        <button type="submit">save</button>
      </div>
    </form>
  );
};

export default PersonForm;
