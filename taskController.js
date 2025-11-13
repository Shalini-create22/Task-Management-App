let tasks = [];
let idCounter = 1;

export const getTasks = (req, res) => {
    res.json(tasks);
};
 export const createTask = (req, res) => {
    const {title,description ,category, priority } =req.body;
       

    if (!title || !description) {
        return res.status(400).json({error: "title and description are nedded"});
    }

    const newTask = {
        id: idCounter++,
        title,
        description,
        category: category || "general",
        category: priority|| "medium",
        completed: false,
    };
    take.push(newTask);
    res.status(201).json(newTask);
};
export const updateTask = (req, res) => {
    const {id} = req.params;
    const {title, description, category, priority, completed } = req.body;

    const task = tasks.find((t) => t.id === parseInt(id));
    if (!task) return res.status(404).json({ error: "task not found"});

    if (title) task.title = title;
    if (description) task.description = description;
if (category) task.category = category;
if (priority) task.priority = priority;
if (completed !== undefined) task.completed =completed;
 
res.json(task);


    };
    export const deleteTask =  (req, res) =>
{
    const {id} = req.params;
    tasks = tasks.filter((t) => t.id !==parseInt (id));
    res.json({ message: "task deleted successfully"});
};