import { useState, useEffect } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

 
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 
  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };


  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

 
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };


  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };


  const saveEdit = (index) => {
    if (!editText.trim()) return;
    const updated = [...tasks];
    updated[index].text = editText;
    setTasks(updated);
    setEditIndex(null);
    setEditText("");
  };

 
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Task Manager</h1>

   
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="border px-3 py-2 rounded w-64"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>


      <div className="flex gap-3 mb-6">
        <button
          className={`px-3 py-1 rounded ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded ${
            filter === "completed" ? "bg-green-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={`px-3 py-1 rounded ${
            filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>


      <ul className="w-96">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-2 mb-2 shadow rounded"
          >
            {editIndex === index ? (
              <div className="flex gap-2 w-full">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(index)}
                  className="border px-2 py-1 rounded w-full"
                />
                <button
                  onClick={() => saveEdit(index)}
                  className="bg-green-500 hover:bg-green-600 text-white px-2 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <span
                  onClick={() => toggleTask(index)}
                  className={`cursor-pointer flex-1 ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.text}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(index)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => toggleTask(index)}
                    className={`px-2 rounded text-white ${
                      task.completed
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-yellow-500 hover:bg-yellow-600"
                    }`}
                  >
                    {task.completed ? "Completed" : "Pending"}
                  </button>

                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
