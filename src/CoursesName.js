import { useParams } from 'react-router-dom';
function CoursesName() {
  const { coursename } = useParams();
  return (
    <div>
      <h1>Courses</h1>
      {coursename}
    </div>
  );
}

export default CoursesName;
