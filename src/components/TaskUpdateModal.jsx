import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/TaskUpdateModal.css";

const TaskUpdateModal = ({ tasks, setTasks }) => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const task = tasks.find(t => t.id === Number(taskId));

  const [progress, setProgress] = useState(task?.progress || 0);
  const [remaining, setRemaining] = useState(task?.remaining || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(prev => prev.map(t => t.id === task.id ? { ...t, progress: Number(progress), remaining: Number(remaining) } : t));
    navigate("/"); // go back to dashboard
  };

  if (!task) return <div>Task not found</div>;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Update Task: {task.project}</h2>
        <form className="task-update-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Progress (%)</label>
            <input type="number" min="0" max="100" value={progress} onChange={e => setProgress(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Remaining Hours</label>
            <input type="number" min="0" value={remaining} onChange={e => setRemaining(e.target.value)} required />
          </div>
          <div className="modal-actions">
            <button type="submit" className="submit-btn">Update</button>
            <button type="button" className="cancel-btn" onClick={() => navigate("/")}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskUpdateModal;
