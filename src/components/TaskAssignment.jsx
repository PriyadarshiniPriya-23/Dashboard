import React, { useState } from 'react';

const TaskAssignment = () => {
  // State for managing task inputs and task list
  const [tasks, setTasks] = useState([]);
  const [employeeName, setEmployeeName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [workName, setWorkName] = useState('');
  const [priority, setPriority] = useState('');

  // Handle form input changes
  const handleEmployeeNameChange = (e) => setEmployeeName(e.target.value);
  const handleTaskNameChange = (e) => setTaskName(e.target.value);
  const handleWorkNameChange = (e) => setWorkName(e.target.value);
  const handlePriorityChange = (e) => setPriority(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ensure all fields are filled out before submitting
    if (employeeName && taskName && workName && priority) {
      const newTask = {
        employeeName,
        taskName,
        workName,
        priority,
      };

      // Add the new task to the task list
      setTasks([...tasks, newTask]);

      // Clear the form fields after submission
      setEmployeeName('');
      setTaskName('');
      setWorkName('');
      setPriority('');
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Assign Work to Employees</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name: </label>
          <input
            type="text"
            value={employeeName}
            onChange={handleEmployeeNameChange}
            placeholder="Enter Employee Name"
            required
          />
        </div>
        <div>
          <label>Task Name: </label>
          <input
            type="text"
            value={taskName}
            onChange={handleTaskNameChange}
            placeholder="Enter Task Name"
            required
          />
        </div>
        <div>
          <label>Work Name: </label>
          <input
            type="text"
            value={workName}
            onChange={handleWorkNameChange}
            placeholder="Enter Work Name"
            required
          />
        </div>
        <div>
          <label>Priority: </label>
          <select value={priority} onChange={handlePriorityChange} required>
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button type="submit">Assign Task</button>
      </form>

      <h3>Assigned Tasks:</h3>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.employeeName} - {task.taskName} - {task.workName} - Priority: {task.priority}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks assigned yet.</p>
      )}
    </div>
  );
};

export default TaskAssignment;
