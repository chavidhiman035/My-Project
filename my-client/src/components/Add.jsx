import { useState } from "react";
import "../style/Add.css";
import axios from "axios";

export function Add() {
  const [empNo, setEmpNo] = useState();
  const [empName, setEmpName] = useState();
  const [empSal, setEmpSal] = useState();

  async function addHandler(e){
    e.preventDefault();
    try{
      const response = await axios.post('https://my-project-dv8u.onrender.com/api/employees', {empNo, empName, empSal});
      alert(response.data.message);
    } catch(err){
      alert(err);
    }
  }

  // const handleInfo = () => {
  //   alert(`    
  //   Emp No: ${empId}
  //   Emp Name: ${empName}
  //   Emp Salary: ${empSal}`);
  // };

  return (
    <div className="form-container">
      <h2 className="form-heading">Employee Details</h2>
      <form>
      <input
        type="number"
        placeholder="Enter Employee No"
        onChange={(e) => setEmpNo(e.target.value)}
        value={empNo}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Enter Employee Name"
        onChange={(e) => setEmpName(e.target.value)}
        value={empName}
        className="form-input"
      />
      <input
        type="number"
        placeholder="Enter Employee Salary"
        onChange={(e) => setEmpSal(e.target.value)}
        value={empSal}
        className="form-input"
      />
      <button onClick={addHandler} className="form-button">
        Add
      </button>
      </form>
    </div>
  );
}
