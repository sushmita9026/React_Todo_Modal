import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, onAddTask, onSaveTask, taskInput, setTaskInput, isEditing }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus(); // Focus the input when modal opens
        }
    }, [isOpen]);

    return (
        isOpen && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <h2>{isEditing ? 'Edit Task' : 'Add Task'}</h2>
                    <input
                        type="text"
                        ref={inputRef}
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        placeholder="Enter task"
                    />
                    <button onClick={isEditing ? onSaveTask : onAddTask}>
                        {isEditing ? 'Save Task' : 'Add Task'}
                    </button>
                </div>
            </div>
        )
    );
};

export default Modal;
