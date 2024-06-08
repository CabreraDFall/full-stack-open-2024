import { useState } from "react";
import PersonList from "./PersonList";
import FilterNumber from "./FilterNumber";
import PersonForm from "./PersonForm";

const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilter = (event) => {
    setFilter(event.target.value);
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

  // To show

  const personToShown = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLocaleLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>

      <FilterNumber filter={filter} handleFilterChange={handleFilter} />

      <h2>Add Number</h2>
      <PersonForm
        addNewObject={addNewObject}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <PersonList users={personToShown} />
    </div>
  );
};

export default Phonebook;
