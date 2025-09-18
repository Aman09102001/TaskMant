import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "../styles/ProjectView.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProjectView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No Project Selected</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="project-view">
      <h2>{project.name} - Details</h2>
      <button onClick={() => navigate(-1)}>Back</button>

      {/* Overall Project Progress */}
      <div className="progress-section">
        <div className="progress-label">
          <span>Overall Progress:</span>
          <span>{project.completion}%</span>
        </div>
        <div className="progress-container">
          <div
            className="progress-fill overall"
            style={{ width: `${project.completion}%` }}
          ></div>
        </div>
      </div>

      {/* Employee Table with Inline Progress */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Role</th>
            <th>Allotted Hours</th>
            <th>Time Taken</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {project.employees.map((emp, idx) => {
            const empProgress = Math.min(
              Math.round((emp.timeTaken / emp.allottedHours) * 100),
              100
            );
            return (
              <tr key={idx}>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.allottedHours}</td>
                <td>{emp.timeTaken}</td>
                <td style={{ width: "150px" }}>
                  <div className="progress-container employee">
                    <div
                      className="progress-fill employee"
                      style={{ width: `${empProgress}%` }}
                    >
                      {empProgress}%
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Chart */}
      <div className="chart-container">
        <Bar
          data={{
            labels: project.employees.map((e) => e.name),
            datasets: [
              {
                label: "Allotted Hours",
                data: project.employees.map((e) => e.allottedHours),
                backgroundColor: "rgba(75, 192, 192, 0.6)"
              },
              {
                label: "Time Taken",
                data: project.employees.map((e) => e.timeTaken),
                backgroundColor: "rgba(153, 102, 255, 0.6)"
              }
            ]
          }}
          options={{ responsive: true }}
        />
      </div>
    </div>
  );
};

export default ProjectView;
