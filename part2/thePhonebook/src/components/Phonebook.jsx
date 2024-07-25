import { useState, useEffect } from "react";
import PersonList from "./PersonList";
import FilterNumber from "./FilterNumber";
import PersonForm from "./PersonForm";

import noteService from "../services/persons";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    noteService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

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
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      };
      setPersons([...persons, perosonObject]);
      setNewName("");
      setNewNumber("");

      noteService.create(perosonObject).then((response) => {
        setPersons([...persons, response.data]);
        setNewName("");
      });
    } else {
      const personToUpdate = persons.find((person) => person.name === newName);

      const confirmUpdate = window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      );

      if (confirmUpdate) {
        const updatedPerson = { ...personToUpdate, number: newNumber };

        noteService
          .update(personToUpdate.id, updatedPerson)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== personToUpdate.id ? person : response
              )
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            console.error("Error updating number", error);
          });
      }
    }
  };

  const deleteObject = (id) => {
    const personToDelete = persons.find((person) => person.id === id);

    noteService
      .deleteUser(id, personToDelete)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((error) => {
        console.error("Failed to delete the person:", error);
      });
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
      <PersonList users={personToShown} deleteObject={deleteObject} />
    </div>
  );
};

export default Phonebook;
