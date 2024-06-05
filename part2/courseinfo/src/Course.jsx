import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

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

  return <div>{course}</div>;
};

export default Course;
