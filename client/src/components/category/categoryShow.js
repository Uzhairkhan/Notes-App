import React from 'react'
import { Link } from 'react-router-dom'

export default class CategoryShow extends React.Component{
    render(){
        return(
            <div>
                <h2>Categories</h2>

                <Link to="/category/add">Add Category</Link>
            </div>
        )
    }
}