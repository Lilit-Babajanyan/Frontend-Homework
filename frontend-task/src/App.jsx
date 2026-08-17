import { useState } from "react";
import { students } from "./students";

function App() {
  const [studentList, setStudentList] = useState(students);

  const handleRemove = (id) => {
    setStudentList(studentList.filter((student) => student.id !== id));
  };
  return (
    <div>
      <h1>Students</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {studentList.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.salary}</td>
              <td>{student.gender}</td>
              <td>
                <button onClick={() => handleRemove(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
