import React from "react";
import axios from "axios";

export default class NotesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      categories: [],
      category: ""
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3025/categories", {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then((response) => {
        const categories = response.data;
        this.setState({ categories });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: this.state.title,
      body: this.state.body,
      category: this.state.category
    };
    axios
      .post("http://localhost:3025/notes", formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then((response) => {
        console.log("noteform", response);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/notes");
  };
  render() {
    console.log(this.state.category);
    return (
      <div>
        <h3>Create Notes</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title{" "}
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <p></p>
          <label>
            Body{" "}
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </label>
          <p></p>
          <label>
            Category{" "}
            <select name="category" onChange={this.handleChange}>
              {this.state.categories.map((category) => {
                return (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </label>
          <p></p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
