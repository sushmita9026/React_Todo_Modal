import React, { useState } from 'react';
import './App.css';
import Modal from './Components/Modal';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, { text: taskInput }]);
            setTaskInput('');
            setIsModalOpen(false);
        }
    };

    const handleRemoveTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const handleEditTask = (index) => {
        setEditingIndex(index);
        setTaskInput(tasks[index].text);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleSaveTask = (index) => {
        const updatedTasks = tasks.map((task, i) => (i === index ? { text: taskInput } : task));
        setTasks(updatedTasks);
        setTaskInput('');
        setIsEditing(false);
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            <Sidebar />
            <div className="main-content">
                <Navbar onOpenModal={() => setIsModalOpen(true)} />
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onAddTask={handleAddTask}
                    onSaveTask={handleSaveTask}
                    taskInput={taskInput}
                    setTaskInput={setTaskInput}
                    isEditing={isEditing}
                    editingIndex={editingIndex}
                />

                <div className="task-list">
                    {tasks.map((task, index) => (
                        <div key={index} className="task-item">
                            <span>{task.text}</span>
                            <div>
                                <button onClick={() => handleEditTask(index)}>Edit</button>
                                <button onClick={() => handleRemoveTask(index)}>Remove</button>
                                <button>Upcoming</button>
                                <button>In Progress</button>
                                <button>Completed</button>
                                <button>Pending</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
