const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total quantity={course.parts} />
    </div>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  return <Part parts={parts} />;
};

const Part = ({ parts }) => {
  const liList = parts.map((part) => {
    return (
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    );
  });
  return <div>{liList}</div>;
};

const Total = ({ quantity }) => {
  const sumQuantity = quantity.reduce((acc, x) => {
    return acc + x.exercises;
  }, 0);

  return <p>total of {sumQuantity} exercise</p>;
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
