const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};
const Content = ({ parts }) => {
  const listItems = parts?.map((part, index) => (
    <p key={index}>
      {part.name} {part.exercises}
    </p>
  ));
  return <div>{listItems}</div>;
};

const Total = ({ duration }) => {
  const sumWithInitial = duration?.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0
  );
  return <p>Number of exercises {sumWithInitial}</p>;
};

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
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total duration={course.parts} />
    </>
  );
};

export default App;
