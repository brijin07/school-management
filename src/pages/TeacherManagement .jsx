import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// Dummy data for initial teachers
const initialTeachers = [
  { id: 1, name: 'Teacher 1', subject: 'Math', class:'10' },
  { id: 2, name: 'Teacher 2', subject: 'English',class:"12" },
  // Add more initial teachers as needed
];

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [newTeacher, setNewTeacher] = useState({ name: '', subject: '',class:'' });

  const handleAddTeacher = () => {
    // Generate a unique ID for the new teacher
    const newTeacherWithId = { ...newTeacher, id: teachers.length + 1 };

    // Update the state with the new teacher
    setTeachers([...teachers, newTeacherWithId]);

    // Clear the form
    setNewTeacher({ name: '', subject: '',class:''});
  };

  const handleDeleteTeacher = (id) => {
    // Filter out the teacher with the specified ID
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);

    // Update the state with the updated list of teachers
    setTeachers(updatedTeachers);
  };

  return (
    <div className='container'>
     <Link to={'/'} className='main-head'> <h2 className=' text-center'>Teacher Management<span className='span'>Go back<i class="fa-solid fa-arrow-right"></i></span></h2></Link>

      {/* Form to add a new teacher */}
      <div>
        <h3 className='mt-5'>Add Teacher</h3>
        <label>
          <input
                    className='form-control '
                    placeholder='name'

            type="text"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
          />
        </label>
        <br />
        <label>
          <input
          className='form-control mt-2'
          placeholder='subject'

            type="text"
            value={newTeacher.subject}
            onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
          />
            <input
          className='form-control mt-2'
          placeholder='class'

            type="text"
            value={newTeacher.class}
            onChange={(e) => setNewTeacher({ ...newTeacher, class: e.target.value })}
          />
        </label>
        <br />
        <button onClick={handleAddTeacher} className='btn btn-warning mt-2'>Add Teacher</button>
      </div>

      {/* List of existing teachers */}
      <div className='mt-5'>
        <h3 className='text-center'>Teachers List</h3>
       
      </div>

      <Table striped bordered hover className='table-secondary' >
     

      <thead>
        <tr>
        <th> No</th>

          <th> Name</th>
          <th>subject</th>

          <th>class</th>
          <th></th>

        </tr>
      </thead>
      {teachers.map((teacher) => (

      <tbody key={teacher.id}>
        <tr>
            <td>{teacher.id}</td>
          <td> {teacher.name}</td>
          <td>{teacher.subject}</td>
          <td> {teacher.class}</td>

          <td> <button style={{border:"none"}} onClick={() => handleDeleteTeacher(teacher.id)}><i class="fa-solid fa-trash fa-lg " style={{color:"red"}}></i></button>
</td>
        </tr>
       
      </tbody>
     ))}
    </Table>
      
    </div>
  );
};

export default TeacherManagement;
