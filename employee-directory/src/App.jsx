import { useState } from "react";
import "./App.css";

function App() {
  // State for the employee form
  const [employee, setEmployee] = useState({
    name: "",
    employeeId: "",
    department: "",
    gender: "",
    phone: "",
    localAddress: "",
    permanentAddress: "",
  });

  // State for storing all employees
  const [employees, setEmployees] = useState([]);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  // Add employee
  const handleSubmit = (event) => {
    event.preventDefault();

    setEmployees([...employees, employee]);

    // Clear form
    setEmployee({
      name: "",
      employeeId: "",
      department: "",
      gender: "",
      phone: "",
      localAddress: "",
      permanentAddress: "",
    });
  };

  // Delete employee
  const handleDelete = (indexToDelete) => {
    const updatedEmployees = employees.filter(
      (emp, index) => index !== indexToDelete
    );

    setEmployees(updatedEmployees);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <div className="flower">🌸</div>

        <h1>Employee Directory</h1>

        <p>Farm Employee Management System</p>
      </div>

      {/* Employee Count */}
      <div className="count-box">
        <span>👩‍🌾</span>
        <strong>Total Employees: {employees.length}</strong>
        <span>🌷</span>
      </div>

      {/* Add Employee Form */}
      <div className="form-card">
        <h2>💗 Add Employee</h2>

        <form onSubmit={handleSubmit}>
          {/* Employee Name */}
          <div className="input-group">
            <label>Employee Name</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              required
            />
          </div>

          {/* Employee ID */}
          <div className="input-group">
            <label>Employee ID</label>
            <input
              type="text"
              name="employeeId"
              value={employee.employeeId}
              onChange={handleChange}
              placeholder="Enter employee ID"
              required
            />
          </div>

          {/* Department */}
          <div className="input-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              placeholder="Enter department"
              required
            />
          </div>

          {/* Gender */}
          <div className="input-group">
            <label>Gender</label>

            <select
              name="gender"
              value={employee.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Phone */}
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Local Address */}
          <div className="input-group">
            <label>Local Address</label>
            <textarea
              name="localAddress"
              value={employee.localAddress}
              onChange={handleChange}
              placeholder="Enter local address"
              required
            ></textarea>
          </div>

          {/* Permanent Address */}
          <div className="input-group">
            <label>Permanent Address</label>
            <textarea
              name="permanentAddress"
              value={employee.permanentAddress}
              onChange={handleChange}
              placeholder="Enter permanent address"
              required
            ></textarea>
          </div>

          <button className="add-btn" type="submit">
            ✨ Add Employee
          </button>
        </form>
      </div>

      {/* Employee List */}
      <div className="employee-section">
        <h2>🌸 Employee List 🌸</h2>

        {/* Conditional Rendering */}
        {employees.length === 0 ? (
          <div className="empty-box">
            <div className="empty-icon">🦋</div>
            <p>No employees added yet.</p>
            <span>Add your first employee above 💕</span>
          </div>
        ) : (
          <div className="employee-grid">
            {employees.map((emp, index) => (
              <div className="employee-card" key={index}>
                {/* Employee Header */}
                <div className="card-top">
                  <div className="avatar">
                    {emp.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3>{emp.name}</h3>
                    <p>{emp.employeeId}</p>
                  </div>
                </div>

                {/* Employee Details */}
                <div className="employee-details">
                  <p>
                    <span>🌱 Department</span>
                    {emp.department}
                  </p>

                  <p>
                    <span>💗 Gender</span>
                    {emp.gender}
                  </p>

                  <p>
                    <span>📞 Phone</span>
                    {emp.phone}
                  </p>

                  <p>
                    <span>🏡 Local Address</span>
                    {emp.localAddress}
                  </p>

                  <p>
                    <span>🏠 Permanent Address</span>
                    {emp.permanentAddress}
                  </p>
                </div>

                {/* Delete Button */}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  🗑️ Delete Employee
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;