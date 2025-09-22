// import React, { useState } from "react";
// import axios from "axios";

// function Createproject() {
//   const [newProject, setNewProject] = useState({
//     name: "",
//     description: "",
//     teamMembers: [],
//     priority: "Medium",
//     startDate: "",
//     endDate: "",
//     budget: ""
//   });

//   // Generic input handler
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject({
//       ...newProject,
//       [name]: value
//     });
//   };

//   // Multi-select handler for team members
//   const handleTeamChange = (e) => {
//     const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
//     setNewProject({
//       ...newProject,
//       teamMembers: selectedOptions
//     });
//   };

//   // Form submit
//   const handleCreateProject = (e) => {
//     e.preventDefault();
//     console.log("Project Created:", newProject);

//     // TODO: Backend API call (axios POST) yaha karein
//     axios.post("http://localhost:5000/api/projects/", newProject)
//       .then(res => console.log(res.data))
//       .catch(err => console.error(err));
//       alert("Project created successfully!");
//   };

//   return (
//     <div className="form-container">
//       <h2>Create New Project</h2>
//       <form className="project-form" onSubmit={handleCreateProject}>
//         <div className="form-group">
//           <label>Project Name</label>
//           <input
//             type="text"
//             name="name"
//             value={newProject.name}
//             onChange={handleInputChange}
//             placeholder="Enter project name"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             name="description"
//             value={newProject.description}
//             onChange={handleInputChange}
//             placeholder="Project description"
//           />
//         </div>

//         <div className="form-group">
//           <label>Team Members</label>
//           <select multiple value={newProject.teamMembers} onChange={handleTeamChange}>
//             <option value="John Doe">John Doe</option>
//             <option value="Jane Smith">Jane Smith</option>
//             <option value="Mike Johnson">Mike Johnson</option>
//             <option value="Sarah Williams">Sarah Williams</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Priority</label>
//           <select name="priority" value={newProject.priority} onChange={handleInputChange}>
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Budget</label>
//           <input
//             type="number"
//             name="budget"
//             value={newProject.budget}
//             onChange={handleInputChange}
//             placeholder="Enter budget"
//           />
//         </div>

//         <div className="form-group">
//           <label>Timeline</label>
//           <div className="date-inputs">
//             <input
//               type="date"
//               name="startDate"
//               value={newProject.startDate}
//               onChange={handleInputChange}
//             />
//             <input
//               type="date"
//               name="endDate"
//               value={newProject.endDate}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         <button type="submit" className="submit-btn">
//           Create Project
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Createproject;

import React, { useState } from "react";
import axios from "axios";

function Createproject() {
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    // teamMembers: [],
    priority: "MEDIUM",
    startDate: "",
    endDate: "",
    budget: ""
  });

  // Generic input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  // Multi-select handler for team members
  const handleTeamChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setNewProject({ ...newProject, teamMembers: selectedOptions });
  };

  // Form submit
  const handleCreateProject = (e) => {
    e.preventDefault();

    // Only send user-fillable fields
    const payload = { ...newProject };

    axios.post("http://localhost:5000/api/projects/", payload, {
    headers: {
    Authorization: `Bearer ${localStorage.getItem("authToken")}` // ya jaha token save hai
   }
    })
      .then(res => {
        console.log(res.data);
        alert("Project created successfully!");
      })
      .catch(err => {
        console.error(err.response?.data || err.message);
        alert("Error creating project!");
      });
  };

  return (
    <div className="form-container">
      <h2>Create New Project</h2>
      <form className="project-form" onSubmit={handleCreateProject}>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            name="name"
            value={newProject.name}
            onChange={handleInputChange}
            placeholder="Enter project name"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={newProject.description}
            onChange={handleInputChange}
            placeholder="Project description"
          />
        </div>

        {/* <div className="form-group">
          <label>Team Members</label>
          <select multiple value={newProject.teamMembers} onChange={handleTeamChange}>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            <option value="Mike Johnson">Mike Johnson</option>
            <option value="Sarah Williams">Sarah Williams</option>
          </select>
        </div> */}

        <div className="form-group">
          <label>Priority</label>
          <select name="priority" value={newProject.priority} onChange={handleInputChange}>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Budget</label>
          <input
            type="number"
            name="budget"
            value={newProject.budget}
            onChange={handleInputChange}
            placeholder="Enter budget"
          />
        </div>

        <div className="form-group">
          <label>Timeline</label>
          <div className="date-inputs">
            <input
              type="date"
              name="startDate"
              value={newProject.startDate}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="endDate"
              value={newProject.endDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Create Project
        </button>
      </form>
    </div>
  );
}

export default Createproject;
