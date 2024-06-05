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

export default Part;
