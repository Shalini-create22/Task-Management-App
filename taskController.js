
let tasks = [];
let idCounter = 1;

export const getTasks = (req, res) => {
  
  res.json(tasks);
};

export const createTask = (req, res) => {
  const { title, description, category, priority } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "title and description are needed" });
  }

  const newTask = {
    id: idCounter++,
    title,
    description,
    category: category || "general",
    priority: priority || "medium",
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, category, priority, completed } = req.body;

  const task = tasks.find((t) => t.id === parseInt(id, 10));
  if (!task) return res.status(404).json({ error: "task not found" });

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (category !== undefined) task.category = category;
  if (priority !== undefined) task.priority = priority;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
};

export const deleteTask = (req, res) => {
  const { id } = req.params;
  const initialLen = tasks.length;
  tasks = tasks.filter((t) => t.id !== parseInt(id, 10));
  if (tasks.length === initialLen) return res.status(404).json({ error: "task not found" });
  res.json({ message: "task deleted successfully" });
};
