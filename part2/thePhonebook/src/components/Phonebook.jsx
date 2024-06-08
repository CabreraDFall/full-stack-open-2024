import { useState } from "react";
import PersonList from "./PersonList";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const confirmNewName = (newName) => {
    return persons.some((person) => {
      return person.name === newName;
    });
  };

  const addNewObject = (event) => {
    event.preventDefault();
    if (!confirmNewName(newName)) {
      const perosonObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons([...persons, perosonObject]);
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
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

      <PersonList users={persons} />
    </div>
  );
};

export default Phonebook;
