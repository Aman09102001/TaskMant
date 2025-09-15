// // src/components/ProjectView.jsx
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ProjectView = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const project = location.state?.project;

//   if (!project) {
//     return (
//       <div style={{ padding: "20px" }}>
//         <h2>No Project Selected</h2>
//         <button onClick={() => navigate(-1)}>Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="project-view">
//       <h2>{project.name} - Details</h2>
//       <button onClick={() => navigate(-1)}>Back</button>

//       <table className="data-table" style={{ marginTop: "20px" }}>
//         <thead>
//           <tr>
//             <th>Employee</th>
//             <th>Role</th>
//             <th>Allotted Hours</th>
//             <th>Time Taken</th>
//           </tr>
//         </thead>
//         <tbody>
//           {project.employees.map((emp, idx) => (
//             <tr key={idx}>
//               <td>{emp.name}</td>
//               <td>{emp.role}</td>
//               <td>{emp.allottedHours}</td>
//               <td>{emp.timeTaken}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div style={{ width: "80%", margin: "20px auto" }}>
//         <Bar
//           data={{
//             labels: project.employees.map((e) => e.name),
//             datasets: [
//               {
//                 label: "Allotted Hours",
//                 data: project.employees.map((e) => e.allottedHours),
//                 backgroundColor: "rgba(75, 192, 192, 0.6)"
//               },
//               {
//                 label: "Time Taken",
//                 data: project.employees.map((e) => e.timeTaken),
//                 backgroundColor: "rgba(153, 102, 255, 0.6)"
//               }
//             ]
//           }}
//           options={{ responsive: true }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProjectView;


////////////////////////////////////////////////////
// src/components/ProjectView.jsx
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ProjectView = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const project = location.state?.project;

//   if (!project) {
//     return (
//       <div style={{ padding: "20px" }}>
//         <h2>No Project Selected</h2>
//         <button onClick={() => navigate(-1)}>Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="project-view">
//       <h2>{project.name} - Details</h2>
//       <button onClick={() => navigate(-1)}>Back</button>

//       {/* Progress Percentage */}
//       <div style={{ margin: "20px 0" }}>
//         <strong>Progress: </strong> {project.completion}%
//         <div className="progress-container" style={{ marginTop: "5px" }}>
//           <div className="progress-bar" style={{ width: "100%", background: "#eee", borderRadius: "5px" }}>
//             <div
//               className="progress-fill"
//               style={{
//                 width: `${project.completion}%`,
//                 background: "#4caf50",
//                 height: "20px",
//                 borderRadius: "5px"
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>

//       <table className="data-table" style={{ marginTop: "20px" }}>
//         <thead>
//           <tr>
//             <th>Employee</th>
//             <th>Role</th>
//             <th>Allotted Hours</th>
//             <th>Time Taken</th>
//           </tr>
//         </thead>
//         <tbody>
//           {project.employees.map((emp, idx) => (
//             <tr key={idx}>
//               <td>{emp.name}</td>
//               <td>{emp.role}</td>
//               <td>{emp.allottedHours}</td>
//               <td>{emp.timeTaken}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div style={{ width: "80%", margin: "20px auto" }}>
//         <Bar
//           data={{
//             labels: project.employees.map((e) => e.name),
//             datasets: [
//               {
//                 label: "Allotted Hours",
//                 data: project.employees.map((e) => e.allottedHours),
//                 backgroundColor: "rgba(75, 192, 192, 0.6)"
//               },
//               {
//                 label: "Time Taken",
//                 data: project.employees.map((e) => e.timeTaken),
//                 backgroundColor: "rgba(153, 102, 255, 0.6)"
//               }
//             ]
//           }}
//           options={{ responsive: true }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProjectView;
/////////////////////////////////////////////////////////////////




// src/components/ProjectView.jsx
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
      <div style={{ margin: "20px 0" }}>
        <strong>Overall Progress: </strong> {project.completion}%
        <div className="progress-container" style={{ marginTop: "5px" }}>
          <div
            className="progress-bar"
            style={{
              width: "100%",
              background: "#eee",
              borderRadius: "5px",
              height: "20px"
            }}
          >
            <div
              className="progress-fill"
              style={{
                width: `${project.completion}%`,
                background: "#4caf50",
                height: "20px",
                borderRadius: "5px"
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Employee-wise Progress */}
      <div style={{ marginTop: "20px" }}>
        <h3>Employee Progress</h3>
        {project.employees.map((emp, idx) => {
          const empProgress = Math.min(
            Math.round((emp.timeTaken / emp.allottedHours) * 100),
            100
          );
          return (
            <div key={idx} style={{ marginBottom: "10px" }}>
              <strong>{emp.name} ({emp.role}): </strong> {empProgress}%
              <div
                className="progress-bar"
                style={{
                  width: "100%",
                  background: "#eee",
                  borderRadius: "5px",
                  height: "15px",
                  marginTop: "3px"
                }}
              >
                <div
                  className="progress-fill"
                  style={{
                    width: `${empProgress}%`,
                    background: "#2196F3",
                    height: "15px",
                    borderRadius: "5px"
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Employee Table */}
      <table className="data-table" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Role</th>
            <th>Allotted Hours</th>
            <th>Time Taken</th>
          </tr>
        </thead>
        <tbody>
          {project.employees.map((emp, idx) => (
            <tr key={idx}>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.allottedHours}</td>
              <td>{emp.timeTaken}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Chart */}
      <div style={{ width: "80%", margin: "20px auto" }}>
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
