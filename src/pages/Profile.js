import React, { Component } from 'react'
import axios from "axios";
import DefaultLayout from "../layouts/Default";

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3000/users/profile")
    }
    render() {
        return (
            <DefaultLayout>
                <h1>Helloooo</h1>
            </DefaultLayout>
        )
    }
}

export default Profile
