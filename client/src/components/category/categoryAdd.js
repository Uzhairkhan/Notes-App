import React from 'react'
import CategoryForm from './categoryForm'
import Axios from 'axios'

export default class CategoryAdd extends React.Component{
    handleSubmit=(formData) => {
        console.log(formData)
        Axios.post('http://localhost:3025/categories',formData , {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render(){
        return(
            <div>
                <h3>Add Categories</h3>
                <CategoryForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}