import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import axios from "axios";

class Students extends Component {
    state = {
        students: null,
        error: null
   }
    componentDidMount(){
        axios.get(`${process.env.REACT_APP_BASE_URL}/students`, {withCredentials: true})
          .then((response)=> {
            this.setState({students: response.data, error: null});
          })
          .catch(err=> {
            this.setState({error: "an error occured"});
          })
      }
    render() {
        return (
            <DefaultLayout>
                {this.state.students?
                    this.state.students.map(student=> <h1>{`${student.firstname} ${student.lastname}`}</h1>)
                    :
                    <h1>Loading...</h1>
                }
                {
                    this.state.error && <p>{this.state.erro}</p>
                }
            </DefaultLayout>
        )
    }
}

export default Students
