import { v4 as uuidv4 } from 'uuid';

function List() {
  const students = [
    {
      name: 'John',
      id: uuidv4(),
      age: 25,
    },
    {
      name: 'Jane',
      id: uuidv4(),
      age: 20,
    },
    {
      name: 'Smith',
      id: uuidv4(),
      age: 35,
    },
  ];

  return (
    <div>
      <h1>Students List</h1>
      <ul>
        {/* {students.map((student) => {
          return <h1 key={student.id}>{student.name}</h1>;
        })} */}

        {students.map((student, index) => (
          <div key={student.id}>
            <h1>{student.name}</h1>
            <p>{student.age}</p>
            <h2>{student.id}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;
