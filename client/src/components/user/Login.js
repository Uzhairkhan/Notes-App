import React from 'react'
import axios from 'axios'

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            error:{}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:3025/users/login',formData)
            .then((response) => {
                if(response.data.hasOwnProperty('error')){
                    const error = response.data.error
                    this.setState({error})
                }else{
                    const token = response.data.token
                    localStorage.setItem('authToken',token)
                    this.props.history.push('/')
                    window.location.reload()
                    alert('Successfully Logged In')
                }
               
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
                <h2>User Login</h2>
                    <div align="center">{this.state.error ? this.state.error.message : ''}</div><p></p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;<input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </label><p></p>
                        <label>Password <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></label><p></p>
                        <input type="submit" value="Login"/>
                    </form>
            </div>
        )
    }
}