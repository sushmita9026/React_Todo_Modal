import React from 'react';
// import './Navbar.css'; // Optional: Create a CSS file for Navbar styling

const Navbar = ({ onOpenModal }) => {
    return (
        <nav className="navbar">
            <button className="modal-button" onClick={onOpenModal}>
                Open Modal
            </button>
        </nav>
    );
};

export default Navbar;
