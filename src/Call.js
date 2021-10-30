export default function Call({ name, age, sum }) {
  return (
    <div>
      {sum(3, 5, 5, 6)}
      <h1>{name}</h1>
      {age}
    </div>
  );
}
