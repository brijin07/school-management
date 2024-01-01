// src/App.js
import React from 'react';
import Login from './pages/Login';
import { Routes,Route } from 'react-router-dom';
import StudentManagement from './pages/StudentManagement ';
import TeacherManagement from './pages/TeacherManagement ';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/"  element={  <Login />} />
      <Route path="/student-management" element={< StudentManagement/>} /> 
      <Route path="/teacher-management" element={<TeacherManagement/>} /> 

 
      </Routes>
    </div>
  );
}

export default App;
