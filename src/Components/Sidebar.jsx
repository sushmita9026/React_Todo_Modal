import React, { useEffect, useState } from 'react';
// import './Sidebar.css'; // Create a CSS file for Sidebar styling

const Sidebar = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
            setTime(formattedTime);
        };

        const intervalId = setInterval(updateTime, 1000);
        updateTime(); // Initial call to set time immediately

        return () => clearInterval(intervalId); // Clean up on unmount
    }, []);

    return (
        <div className="sidebar">
            <div className="clock">{time}</div>
            <div className="task-buttons">
                <button>All Tasks</button>
                <button>Upcoming Tasks</button>
                <button>In Progress</button>
                <button>Completed</button>
                <button>Pending</button>
            </div>
        </div>
    );
};

export default Sidebar;
