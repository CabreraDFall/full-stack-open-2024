const Course = ({ courses }) => {
  const course = courses.map((x) => {
    return (
      <div key={x.id}>
        <Header name={x.name} />
        <Content parts={x.parts} />
        <Total quantity={x.parts} />
      </div>
    );
  });

  return (
    <div>{course}</div>
    // <div>
    //   <Content parts={course.parts} />
    //   <Total quantity={course.parts} />
    // </div>
  );
};

const Header = ({ name }) => {
  return <h2>{name}</h2>;
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
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  );
};

export default App;
