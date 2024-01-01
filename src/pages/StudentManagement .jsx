import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

// Dummy data for initial students
const initialStudents = [
  { id: 1, name: "Student 1", grade: "A", class: "10" },
  { id: 2, name: "Student 2", grade: "B", class: "12" },
  // Add more initial students as needed
];

const StudentManagement = () => {
  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState({
    name: "",
    grade: "",
    class: "",
  });

  const handleAddStudent = () => {
    // Generate a unique ID for the new student
    const newStudentWithId = { ...newStudent, id: students.length + 1 };

    // Update the state with the new student
    setStudents([...students, newStudentWithId]);

    // Clear the form
    setNewStudent({ name: "", grade: "", class: "" });
  };

  const handleDeleteStudent = (id) => {
    // Filter out the student with the specified id
    const updatedStudents = students.filter((student) => student.id !== id);

    // Update the state with the updated list of students
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
           <Link to={'/'} className='main-head'> <h2 className=' text-center'>Student Management<span className='span'>Go back<i class="fa-solid fa-arrow-right"></i></span></h2></Link>


      {/* Form to add a new student */}
      <div>
        <h3 className="mt-5">Add Student</h3>
        <label>
          <input
            className="form-control"
            placeholder="name"
            type="text"
            value={newStudent.name}
            onChange={(e) =>
              setNewStudent({ ...newStudent, name: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          <input
            className="form-control mt-2"
            placeholder="grade"
            type="text"
            value={newStudent.grade}
            onChange={(e) =>
              setNewStudent({ ...newStudent, grade: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          <input
            className="form-control mt-2"
            placeholder="class"
            type="text"
            value={newStudent.class}
            onChange={(e) =>
              setNewStudent({ ...newStudent, class: e.target.value })
            }
          />
        </label>
        <br />
        <button onClick={handleAddStudent} className="btn btn-warning mt-2">
          Add Student
        </button>
      </div>

      {/* List of existing students */}
      <div className="mt-2">
        <h3 className="text-center">Students List</h3>
      </div>
      <Table striped bordered hover className="table-secondary">
        <thead>
          <tr>
            <th> No</th>

            <th> Name</th>
            <th>subject</th>

            <th>class</th>
            <th></th>
          </tr>
        </thead>
        {students.map((student) => (
          <tbody key={student.id}>
            <tr>
              <td>{student.id}</td>
              <td> {student.name}</td>
              <td>{student.grade}</td>
              <td> {student.class}</td>

              <td>
                {" "}
                <button
                  onClick={() => handleDeleteStudent(student.id)}
                  style={{ border: "none" }}
                >
                  <i
                    class="fa-solid fa-trash fa-lg"
                    style={{ color: "red" }}
                  ></i>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default StudentManagement;
