import React from 'react';
import {Link} from "react-router-dom";
import "./Sidebar.scss";
import {logout, getUser} from "../utils/auth";

function Sidebar() {
    let user = getUser();
    return (
        <div className="sidebar">
            <h1>Navbaaaaaar</h1>
            {user? 
                <>
                    <a href="#" onClick={logout}>Logout</a>

                    <Link to="/students">Students</Link>
                    <Link to="/add-student">Add Student</Link>
                </>:
                <>
                    <Link to="signup">Signup</Link>
                    <Link to="login">Login</Link>
                </>
            }
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Sidebar;
