import React from 'react'
import axios from 'axios'


export default class Logout extends React.Component{
    handleSubmit=()=>{
        axios.delete('http://localhost:3025/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            localStorage.removeItem("authToken")
            this.props.history.push('/')
            window.location.reload()
    }
    render(){
        return(
            <div></div>
        )
    }
}