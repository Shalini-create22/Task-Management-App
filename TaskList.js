
import React, { useEffect, useState } from 'react';
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    category: '',
    priority: '',
  });

  const API_URL = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    
      const fetchTasks = async () => {

        try {
        const res = await axios.get("${https://jsonplaceholder.typicode.com/todos}_limit=5");
        setTasks(res.data);
        }catch (err) {
          console.error("Error fetching tasks:",err);
        }
    };
    fetchTasks();
  },[]);




  const addTask =  async () => {
    if (!newTask.title || !newTask.description) {
      alert('Please fill all fields!');
      return;
    }
    try {
      const res =  await axios.post("https://jsonplaceholder.typicode", {
        title: newTask.title,
        description: newTask.description,
        category: newTask.category,
        priority: newTask.priority,
        completed: false,
      });


    
    setTasks([...tasks, res.data]);
    setNewTask({
      title: '',
      description: '',
      category: '',
      priority: '',
    });
  } catch (err) {
     console.error("Error adding task:", err);
    }
  };

  
  const deleteTask = async  (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this");
    if  (!confirmDelete) return;

    try {
      await axios.delete("${https://jsonplaceholder.typicode}/${id}");
    setTasks(tasks.filter((task) => task.id !== id));
      } catch (err) {
        console.error("Error deleting task:", err);
      }
  };
  const toggleComplete = async (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
      );
    setTasks(updatedTasks);
    try {
      const taskToUpdate = tasks.find((task) => task.id === id);
      await axios.put("${https://jsonplaceholder.typicode}/${id}", {
        completed: !taskToUpdate.completed,
      });
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };
        

  return (
    <div className="taskListContainer">
      <h2>Add a Task</h2>

      <div className="taskForm">
        <div className="inputGroup">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter task title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={newTask.category}
            onChange={(e) =>
              setNewTask({ ...newTask, category: e.target.value })
            }
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
        
          </select>
        </div>

        <div className="inputGroup">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={newTask.priority}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="inputGroup">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Enter task description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          ></textarea>
        </div>

        <button className="btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="taskCards">
        {tasks.length === 0 ? (
          <p className="no-task">No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <div className="taskCard" key={task.id}>
              <div className="taskInfo">
                <h3>{task.title}</h3>
                <p className="taskDescription">{task.description}</p>
                <p>
                  <strong>Category:</strong> {task.category}
                </p>
                <p>
                  <strong>Priority:</strong>{' '}
                  <span className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>
                </p>
              </div>
              <div className="taskRight">
                <button className="deleteBtn" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;


