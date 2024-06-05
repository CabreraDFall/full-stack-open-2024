import Course from "./Course";
import coursesData from "./assets/data";

const App = () => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={coursesData} />
    </div>
  );
};

export default App;
