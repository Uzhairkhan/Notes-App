import React from "react";

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name ? props.name : ""
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.state.name
    };
    this.props.handleSubmit(formData);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Category{" "}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <p></p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
