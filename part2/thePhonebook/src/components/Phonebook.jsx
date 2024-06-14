import { useState, useEffect } from "react";
import PersonList from "./PersonList";
import FilterNumber from "./FilterNumber";
import PersonForm from "./PersonForm";

import axios from "axios";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "notes");

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
      axios
        .post("http://localhost:3001/persons", perosonObject)
        .then((response) => {
          setPersons([...persons, response.data]);
          setNewName("");
        });
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
