import React from 'react'
import axios from 'axios'

export default class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:"",
            email:"",
            password:""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
       axios.post('http://localhost:3025/users/register', formData)
            .then((response) => {
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    alert('succesfully registered')
                    this.props.history.push('/users/login')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div align="center">
                <h2>User Registration</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username &nbsp;<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></label><p></p>
                    <label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;<input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></label><p></p>
                    <label>Password &nbsp;<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></label><p></p>
                    <input type="submit" value="register"/>
                </form>
            </div>
        )
    }
}