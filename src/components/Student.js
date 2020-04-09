import React from "react";
import "./Student.css";

// functional react component
function Student(props){
    return (
    <div className="student">
        <h1>Hi I am {props.firstname} {props.lastname}</h1>
        <p>This is a story about me</p>
        <img src={props.image} alt=""/>
    </div>
    )
}

export default Student;