import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.scss";
import {getUser} from "../utils/auth";

function Navbar() {
    let user = getUser() // faked this one. It's not implemented
    return (
        <nav>
            <h1>Navbaaaaaar</h1>
            {user? 
                <div>
                    <Link to="logout">Logout</Link>
                    <Link to="Signup">Signup</Link>
                </div>:
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            }
            <Link to="/students">Students</Link>
            <Link to="/add-student">Add Student</Link>
        </nav>
    )
}

export default Navbar;
