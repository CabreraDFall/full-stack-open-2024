import { useState } from "react";

const PointsSystem = ({ points, selected, updatePoints }) => {
  const handleVote = () => {
    updatePoints((prevPoints) => {
      const copy = { ...prevPoints };

      if (copy[selected]) {
        copy[selected]++;
      } else {
        copy[selected] = 1;
      }
      return copy;
    });
  };

  return (
    <>
      <p>Has {points[selected] || 0} votes </p>
      <button onClick={() => handleVote()}>vote</button>
    </>
  );
};

const HighScore = ({ points, anecdotes }) => {
  const isEmpty = Object.values(points).length;

  const highestNote = (points) => {
    return Object.entries(points).reduce(
      (highest, current) => {
        const [currentKey, currentValue] = current;
        const [highestKey, highestValue] = highest;
        return currentValue > highestValue ? current : highest;
      },
      ["", -Infinity]
    );
  };

  const [highestKey, highestValue] = highestNote(points);

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      {isEmpty === 0 ? (
        <p>There is no votes yet. Be the first.</p>
      ) : (
        <div>
          <p>{anecdotes[highestKey]} </p>
          <p>has {highestValue} votes</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [points, setPoints] = useState({});

  const [selected, setSelected] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );

  const handleNextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <PointsSystem
          points={points}
          selected={selected}
          updatePoints={setPoints}
        />
        <button onClick={handleNextAnecdote}>next anecdote</button>
      </div>

      <HighScore points={points} anecdotes={anecdotes} />
    </>
  );
};

export default App;
