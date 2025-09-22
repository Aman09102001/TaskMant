import React, { useState } from "react";
import "../styles/Dashboard.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { useNavigate } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ManagerDashboard = ({ user, onLogout }) => {
  const [activeNav, setActiveNav] = useState("projects");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navigate = useNavigate();

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      employees: [
        { name: "John Doe", role: "Developer", allottedHours: 40, timeTaken: 38 },
        { name: "Jane Smith", role: "Designer", allottedHours: 35, timeTaken: 36 }
      ],
      status: "In Progress",
      completion: 65
    },
    {
      id: 2,
      name: "Mobile App Development",
      employees: [
        { name: "Mike Johnson", role: "QA", allottedHours: 30, timeTaken: 28 },
        { name: "Sarah Williams", role: "Manager", allottedHours: 50, timeTaken: 48 }
      ],
      status: "On Track",
      completion: 80
    }
  ]);

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    teamMembers: [],
    totalHours: "",
    startDate: "",
    endDate: ""
  });

  const [employeeProblems, setEmployeeProblems] = useState([
    { id: 1, employee: "John Doe", problem: "Task deadline unclear", status: "Pending" },
    { id: 2, employee: "Jane Smith", problem: "Need access to design tool", status: "Pending" },
    { id: 3, employee: "Mike Johnson", problem: "Server not responding", status: "Resolved" }
  ]);

  const handleNavigation = (nav) => setActiveNav(nav);

  const renderContent = () => {
    switch (activeNav) {
      case "projects":
        return (
          <div className="table-container">
            <h2>Project Overview</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Employees</th>
                  <th>Status</th>
                  <th>Completion</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{project.employees.length}</td>
                    <td>
                      <span
                        className={`status-badge ${project.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td>
                      <div className="progress-container">
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${project.completion}%` }}
                          ></div>
                        </div>
                        <span>{project.completion}%</span>
                      </div>
                    </td>
                    <td>
                      <button
                        className="action-btn view-btn"
                        onClick={() =>
                          navigate("/manager/project-view", { state: { project } })
                        }
                      >
                        <i className="fas fa-eye"></i> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      

      default:
        return <div>Select an option from the navigation</div>;
    }
  };

  return (
    <div className="dashboard">


      {/* Sidebar Navigation */}
      <nav className="manager-nav">
        <button
          className={activeNav === "projects" ? "active" : ""}
          onClick={() => handleNavigation("projects")}
        >
          <i className="fas fa-project-diagram"></i>
          <span>Projects Overview</span>
        </button>
        <button
          className={activeNav === "createProject" ? "active" : ""}
          onClick={() => {
          setActiveNav("createProject");
          navigate("/manager/createproject");
          }}
        >
          <i className="fas fa-plus-circle"></i>
          <span>Create New Project</span>
        </button>
        <button
          className={activeNav === "assignTask" ? "active" : ""}
          onClick={() => {
            setActiveNav("assignTask");
            navigate("/manager/assignTask")}}
        >
          <i className="fas fa-tasks"></i>
          <span>Assign Task</span>
        </button>
        <button
          className={activeNav === "employeeQueries" ? "active" : ""}
          onClick={() =>{ setActiveNav("employeeQueries");
            navigate("/manager/employeeQueries")}}
        >
          <i className="fas fa-exclamation-circle"></i>
          <span>Employee Problems</span>
        </button>
        <button
          className={activeNav === "sendNotification" ? "active" : ""}
          onClick={() =>{ 
              setActiveNav("sendNotification");
             navigate("/manager/notificationbar")
          }}
        >
          <i className="fas fa-bell"></i>
          <span>Send Notification</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="dashboard-content">{renderContent()}</main>
    </div>
  );
};

export default ManagerDashboard;
