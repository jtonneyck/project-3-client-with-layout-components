import React, { Component } from 'react'
import {login} from "../utils/auth";
import DefaultLayout from "../layouts/Default";
import axios from 'axios';
import qs from "qs";
export default class Login extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        username: "",
        password: ""
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        login(this.state)
        .then((response)=> {
            this.props.history.push("/profile");
        })
    }

    render() {
        return (
            <DefaultLayout>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} value={this.state.username} placeholder="username" type="text" name="username"/>
                        <input onChange={this.handleChange} value={this.state.password} placeholder="password"  type="password" name="password"/>
                        <button type="submit">Submit </button>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}