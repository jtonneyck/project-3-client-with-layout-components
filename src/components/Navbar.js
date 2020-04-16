import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import "./Navbar.scss";
import {getUser, logout} from "../utils/auth";

class Navbar extends Component {
    constructor(){
        super()
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(){
        logout()
        .then(()=> {
            this.props.history.push("/home");
        })
        .catch((err)=> {
            
        })
    }
    render(){
        let user = getUser();
        return (
            <nav>
                <h1>Navbaaaaaar</h1>
                {user? 
                    <div>
                        <a onClick={this.handleLogout}>Logout</a>
                        <Link to="/students">Students</Link>
                        <Link to="/add-student">Add Student</Link>
                    </div>:
                    <div>
                        <Link to="signup">Signup</Link>
                        <Link to="login">Login</Link>
                    </div>
                }
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        )
    }

}

export default withRouter(Navbar);
