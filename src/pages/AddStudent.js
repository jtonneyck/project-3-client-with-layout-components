import React, { Component } from 'react'
import axios from "axios";
import qs from "qs";
import DefaultLayout from "../layout/Default";

class AddStudent extends Component {
    constructor(props) {
        super(props)

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.addStudent = this.addStudent.bind(this);
    }

    state = {
        firstname: "",
        lastname: ""
    }

    inputChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addStudent(e){
        e.preventDefault();
        axios({
            url: "http://localhost:3000/students/add",
            data: qs.stringify(this.state),
            method: "POST",
        })
        .then(()=> {
            this.props.history.push("/students")
        })
        .catch((err)=> {
            console.log("Error", err)
        })
      }

    render() {
        return (
            <DefaultLayout>
                <form onSubmit={this.addStudent}>
                    <input type="text" onChange={this.inputChangeHandler} name="firstname" placeholder="firstname"/>
                    <input type="text" onChange={this.inputChangeHandler} name="lastname" placeholder="lastname"/>
                    <button type="submit">Add student</button>
                </form>
            </DefaultLayout>
        )
    }
}

export default AddStudent
