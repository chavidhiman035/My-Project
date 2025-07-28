import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import  { GetId } from './components/GetId'; 
import  { Delete } from './components/Delete'; 
import { Add } from './components/Add';
import { GetAll } from './components/GetAll';
import { Update } from './components/Update';
import './style/App.css';
export function App() {
  return (
   
  <div className='app-container'>
    
    <div className="heading"><h2>Employee Record Management System </h2></div>

   <div className='nav-links'>
        <nav >
            <NavLink to="/insert">Insert Employee</NavLink>
            <NavLink to="/find-all">Find All Employees</NavLink>
            <NavLink to="/find-by-id">Find Employee by ID</NavLink>
            <NavLink to="/delete">Delete Employee</NavLink>
            <NavLink to="/update">Update Employee</NavLink>
        </nav>
    </div>

    <div>
        <Routes claasName="routes">
            <Route path="/insert" element={<Add/>}/>
            <Route path="/find-all" element={<GetAll/>}/>
            <Route path="/find-by-id" element={<GetId/>} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/update" element={<Update />} />
        </Routes>
        
    </div>
  </div>


  );
}
