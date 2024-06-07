import { useState } from "react";
import PersonList from "./PersonList";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const addNewname = (event) => {
    const perosonObject = {
      name: newName,
      id: persons.length + 1,
    };
    event.preventDefault();
    setPersons([...persons, perosonObject]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewname}>
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
          <button type="submit">save</button>
        </div>
      </form>

      <PersonList users={persons} />
    </div>
  );
};

export default Phonebook;
