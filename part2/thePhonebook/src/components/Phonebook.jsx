import { useState } from "react";
import PersonList from "./PersonList";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const confirmNewName = (newName) => {
    return persons.some((person) => {
      return person.name === newName;
    });
  };

  const addNewname = (event) => {
    event.preventDefault();
    if (!confirmNewName(newName)) {
      const perosonObject = {
        name: newName,
        id: persons.length + 1,
      };
      setPersons([...persons, perosonObject]);
      setNewName("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
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
