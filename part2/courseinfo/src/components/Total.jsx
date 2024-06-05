const Total = ({ quantity }) => {
  const sumQuantity = quantity.reduce((acc, x) => {
    return acc + x.exercises;
  }, 0);

  return <p>total of {sumQuantity} exercise</p>;
};

export default Total;
