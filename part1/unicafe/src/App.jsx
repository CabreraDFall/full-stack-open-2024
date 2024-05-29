import { useState } from "react";

const Button = ({ text, counter }) => {
  return <button onClick={counter}>{text}</button>;
};

const Statistics = ({ text, counter }) => {
  return (
    <p>
      {text} {counter}
    </p>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonInfo = [
    { name: "good", counter: good, handleClick: () => setGood(good + 1) },
    {
      name: "neutral",
      counter: neutral,
      handleClick: () => setNeutral(neutral + 1),
    },
    { name: "bad", counter: bad, handleClick: () => setBad(bad + 1) },
  ];

  return (
    <div>
      <h1>give feedback</h1>

      <div>
        {buttonInfo.map((button, index) => (
          <Button key={index} counter={button.handleClick} text={button.name} />
        ))}
      </div>

      <div>
        {buttonInfo?.map((button, index) => (
          <Statistics key={index} text={button.name} counter={button.counter} />
        ))}
      </div>
    </div>
  );
};

export default App;
