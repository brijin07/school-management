// Import necessary libraries
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



// Dummy data for students and teachers (Replace with actual authentication logic)
const students = [{ username: "student", password: "123" }];

const teachers = [{ username: "teacher", password: "123" }];

// Login component
const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role is student

  const handleLogin = () => {
    // Replace this logic with actual authentication logic (e.g., API call)
    let isValidUser = false;

    if (role === "student") {
      isValidUser = students.some(
        (student) =>
          student.username === username && student.password === password
      );
    } else if (role === "teacher") {
      isValidUser = teachers.some(
        (teacher) =>
          teacher.username === username && teacher.password === password
      );
    }

    if (isValidUser) {
      if (role === "student") {
        toast.success("login success");
        setTimeout(() => {
          navigate("/student-management");

        }, "2000");
      } else if (role === "teacher") {

        toast.success("login success");
        setTimeout(() => {
          navigate("/teacher-management");

        }, "2000");
      }

      // Add logic to redirect or perform other actions after successful login
    } else {
      toast.error("please enter username and password");
    }
  };

  return (
    <div className="main mt-5 container">
      <div className="row  w-100">
        <div className="img col-md-6  "></div>
        <div className="col-md-6">
          <div className="loginn  p-2 mt-5">
            <h1 className="">Welcome </h1>
            <ToastContainer />

            <p>login to continue</p>
            <label>
              <input 
                className="inpu "
                placeholder="username=teacher/student"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                className="inpu"
                placeholder="password=123"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <label>
              <select
                className=" btns btn btn-secondary dropdown-toggle mt-1"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </label>
            <br />
            <div>
              <button className=" btn btn-danger  " onClick={handleLogin} style={{width:"150px"}}>
                Login
              </button>
              <a href="" className="ms-4 fw-bold">forgot password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
