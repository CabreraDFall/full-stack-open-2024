// Part 1.1
const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
const Content = ({ parts }) => {
  const partLoop = parts?.map((part, index) => (
    <Part key={index} part={part.name} exercise={part.exercises} />
  ));

  return <>{partLoop}</>;
};

const Total = ({ duration }) => {
  const sumWithInitial = duration?.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0
  );
  return <p>Number of exercises {sumWithInitial}</p>;
};

// Part 1.2
const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

//Part 1.1 - 1.5
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total duration={course.parts} />
    </div>
  );
};

export default App;
