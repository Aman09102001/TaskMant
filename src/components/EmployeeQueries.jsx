import React, { useState } from "react";

function EmployeeQueries() {
  // Dummy data (baad me backend se fetch kar sakte ho)
  const [employeeProblems, setEmployeeProblems] = useState([
    { id: 1, employee: "John Doe", problem: "Laptop not working", status: "Pending" },
    { id: 2, employee: "Jane Smith", problem: "VPN issue", status: "In Progress" },
    { id: 3, employee: "Mike Johnson", problem: "Email not syncing", status: "Resolved" },
  ]);

  // Status change handler
  const handleStatusChange = (id, newStatus) => {
    setEmployeeProblems((prev) =>
      prev.map((query) =>
        query.id === id ? { ...query, status: newStatus } : query
      )
    );
  };

  // Submit handler
  const handleSubmitQueries = (e) => {
    e.preventDefault();
    console.log("Updated Employee Queries:", employeeProblems);
    alert("Employee queries updated successfully ✅");
    // yaha tum backend ko POST/PUT request bhej sakte ho
  };

  return (
    <div className="table-container">
      <h2>Employee Queries</h2>
      <form onSubmit={handleSubmitQueries}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Problem</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employeeProblems.map((query) => (
              <tr key={query.id}>
                <td>{query.employee}</td>
                <td>{query.problem}</td>
                <td>
                  <select
                    value={query.status}
                    onChange={(e) =>
                      handleStatusChange(query.id, e.target.value)
                    }
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                    <option>Closed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="submit"
          className="submit-btn"
          style={{ marginTop: "10px" }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EmployeeQueries;
