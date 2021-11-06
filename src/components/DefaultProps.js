export default function DefaultProps({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
}

DefaultProps.defaultProps = {
  name: 'Ali',
  age: 26,
};
