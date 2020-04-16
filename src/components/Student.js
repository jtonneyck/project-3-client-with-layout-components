import React from "react";
import "./Student.css";
import Notifications from "../context/Notifications";

// functional react component
class Student extends React.Component {
    constructor(){
        super()
    }
    static contextType = Notifications;
    render(){
        
        return (
            <div className="student">
                <h1>Hi I am {this.props.firstname} {this.props.lastname}</h1>
                <p>This is a story about me</p>
                <img src={this.props.image} alt=""/>
                <button onClick={()=> {this.context({message: "test test test"})}}>add Notification</button>
            </div>
        )
    }

}

export default Student;