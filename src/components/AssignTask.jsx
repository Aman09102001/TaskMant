// import React from 'react'

// function AssignTask() {
//   return (
//           <div className="form-container">
//             <h2>Assign Task to Employee</h2>
//             <form className="task-form">
//               <div className="form-group">
//                 <label>Select Project</label>
//                 <select name="project">
//                   {projects.map((project) => (
//                     <option key={project.id} value={project.name}>
//                       {project.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Select Employee</label>
//                 <select name="employee">
//                   <option>John Doe</option>
//                   <option>Jane Smith</option>
//                   <option>Mike Johnson</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Task Title</label>
//                 <input type="text" placeholder="Task title" />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea placeholder="Task description"></textarea>
//               </div>
//               <div className="form-group">
//                 <label>Priority</label>
//                 <select>
//                   <option>Low</option>
//                   <option>Medium</option>
//                   <option>High</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Allotted Hours</label>
//                 <input type="number" placeholder="Enter allotted hours" />
//               </div>
//               <div className="form-group">
//                 <label>Due Date</label>
//                 <input type="date" />
//               </div>
//               <button type="submit" className="submit-btn">
//                 Assign Task
//               </button>
//             </form>
//           </div>
//         );

// }

// export default AssignTask;



import React, { useState, useEffect } from "react";
import axios from "axios";

function AssignTask() {
  const [projects, setProjects] = useState([]);
  const [task, setTask] = useState({
    project: "",
    employee: "",
    title: "",
    description: "",
    priority: "Medium",
    allottedHours: "",
    dueDate: ""
  });

  // 🔹 Get projects from backend (dummy endpoint change as per your backend)
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        setProjects(res.data); // assuming res.data = [{id, name}, ...]
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  // 🔹 Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Assigned:", task);

    // TODO: Backend call
    axios
      .post("http://localhost:5000/api/tasks", task)
      .then((res) => {
        alert("Task assigned successfully!");
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to assign task");
      });
  };

  return (
    <div className="form-container">
      <h2>Assign Task to Employee</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Select Project</label>
          <select name="project" value={task.project} onChange={handleChange} required>
            <option value="">-- Select Project --</option>
            {projects.map((project) => (
              <option key={project.id} value={project.name}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Select Employee</label>
          <select name="employee" value={task.employee} onChange={handleChange} required>
            <option value="">-- Select Employee --</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            <option value="Mike Johnson">Mike Johnson</option>
          </select>
        </div>

        <div className="form-group">
          <label>Task Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Task title"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Task description"
          />
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Allotted Hours</label>
          <input
            type="number"
            name="allottedHours"
            value={task.allottedHours}
            onChange={handleChange}
            placeholder="Enter allotted hours"
          />
        </div>

        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Assign Task
        </button>
      </form>
    </div>
  );
}

export default AssignTask;
