import React, { Component } from 'react'
import axios from "axios";
import Student from "../components/Student";
import DefaultLayout from "../layouts/Default";
class Students extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        students: null
    }

    componentDidMount(){
        axios({
                url: "http://localhost:3000/students",
                method: "GET"
            })
            .then((response)=> {
                this.setState({students: response.data})
            })
            .catch((err)=> {
                console.log("error error")
            })
            
    }

    render() {
        return (
            <DefaultLayout>
                { this.state.students ?
                    this.state.students.map((student, index)=> 
                        <Student 
                            studentIndex={index}
                            deleteStudent={this.removeStudent}
                            firstname={student.firstname} 
                            lastname={student.lastname} 
                            image={`https://wd-ft-feb.s3.eu-central-1.amazonaws.com/${student.firstname.toLowerCase()}.png`}
                        />):
                    <img src="/spinner.gif"/>
                }
            </DefaultLayout>
        )
    }
}

export default Students
