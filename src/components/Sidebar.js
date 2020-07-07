import React from 'react';
import {Link} from "react-router-dom";
import "./Sidebar.scss";
function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/students">Students</Link>

        </div>
    )
}

export default Sidebar;
