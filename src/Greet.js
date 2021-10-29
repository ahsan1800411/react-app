export const Greet = ({ name, money, sum }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>{money}</h2>
      <h2>Hii</h2>
      {sum(2, 6)}
    </div>
  );
};
